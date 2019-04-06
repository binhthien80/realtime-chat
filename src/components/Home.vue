<template>
  <div class="main-login">
    <div class="webrtc--main">
        <ListUsers />
        <ChatBox />
        <div class="webrtc--button__show" v-on:click="handleShowListUser(!getShowListUser)">
          <img :src="Chat" alt width="25">
        </div>
        <ThemeOptions />
        <div class="popup-collapse" v-if="getShowPopupNav" ref="popupNav"></div>
        <transition
          name="custom-classes-transition"
          leave-active-class="animated bounceOutRight"
          :duration="{ leave: 800 }"
        >
        <div class="moving-zone" v-if="getShowPopupNav">
            <div class="popup-nav">
                <div class="popup-content">
                    <div class="popup-text">
                      <div class="popup-close-tab"> <img :src="Close" alt="" @click="mulShowPopupNav(false)"> </div>
                      <img :src="getAvatar" width="100" alt="">
                      <p class="popup-name">User name: {{getUsername}}</p>
                      <div>
                        <label>
                          <input type="radio" class="option-input radio" id="option-input_1" name="example" value="online" @click="checkOnline('online')" :checked="getStatus === 'online'" />
                          Online
                        </label>
                        <label>
                          <input type="radio" class="option-input radio" id="option-input_2" name="example" value="busy" @click="checkOnline('busy')" :checked="getStatus === 'busy'"/>
                          Busy
                        </label>
                        <label>
                          <input type="radio" class="option-input radio" id="option-input_3" name="example" value="away" @click="checkOnline('away')" :checked="getStatus === 'away'"/>
                          Away
                        </label>
                      </div>
                      <div class="popup-logout" @click="handleLogoutAccount()">
                          <img :src="Logout" width="60" alt="">
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </transition>
      </div>
    </div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>
<script>
import ListUsers from '@/components/ListUsers/Index.vue'
import ChatBox from '@/components/ChatBox/Index.vue'
import ThemeOptions from '@/components/ThemeOptions/Index.vue'
import Chat from '@/assets/images/chat.svg'
import Logout from '@/assets/images/logout.svg'
import Close from '@/assets/images/close.svg'
import { mapGetters, mapActions } from 'vuex'
import auth from '@/services/auth'
import $ from 'jquery'
import _ from 'lodash'
import Firebase,{ functions } from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCDqHt2lrLBehbkgeCvA_Pl5MfXeqTbb-g",
  authDomain: "realtime-chat-ba4ae.firebaseapp.com",
  databaseURL: "https://realtime-chat-ba4ae.firebaseio.com",
  projectId: "realtime-chat-ba4ae",
  storageBucket: "realtime-chat-ba4ae.appspot.com",
  messagingSenderId: "383327846403"
};
Firebase.initializeApp(config)
let db = Firebase.database()
let arrayUserFB = db.ref()

export default {
  name: 'Home',
  components: {
    ListUsers,
    ChatBox,
    ThemeOptions
  },
  sockets : {
    connect: function () {
      console.log('socket connected to server')
    },
    server_send_arrayUser_to_client: function (data) {
      this.$store.dispatch('setListUsers', data)
      this.$store.dispatch('mulCountUsers', data.length)
      this.$store.dispatch('mulCountUsersOnline', data.filter(i=> i.status !== 'offline').length)
    },
    server_send_account_to_client: function (data) {
      auth.setAccountLocalstore(data)
      this.$store.dispatch('setAccount', data)
    }
  },
  firebase: {
    arrayUserFB
  },
  data () {
    return {
      Chat,
      Close,
      Logout
    }
  },
  computed: {
    ...mapGetters(['getShowListUser', 'getShowPopupNav', 'getUsername', 'getAvatar', 'getStatus'])
  },
  methods: {
    ...mapActions(['mulShowPopupNav', 'setStatus']),
    handleShowListUser (e) {
      this.$store.dispatch('mulShowListUser', e)
    },
    handleLogoutAccount () {
      this.$socket.emit('logout-server', this.$store.getters.getAccount, function () {
        auth.logoutAccount()
        window.history.go()
      })
    },
    outsideClickPopupNav (e) {
      if (_.find([...e.path], i => i === this.$refs.popupNav)) {
        this.$store.dispatch('mulShowPopupNav', false)
      }
    },
    checkOnline: function (value){
      this.$store.dispatch('setStatus', value)
      this.$socket.emit('send_info_account', {username: this.$store.getters.getUsername, avatar: this.$store.getters.getAvatar, status: this.$store.getters.getStatus, id: this.$store.getters.getId})
      if (value === 'online') {
        this.$snotify.success('Changed status into online', value)
      } else if (value === 'busy') {
        this.$snotify.error('Changed status into busy', value)
      } else if (value === 'away') {
        this.$snotify.warning('Changed status into away', value)
      }
    }
  },
  created () {
    if(this.$store.getters.getListUsers.length === 0) {
      this.$socket.emit('ser_start')
    }
    this.$store.dispatch('setUsername', auth.getAccountLocalstore().username)
    this.$store.dispatch('setAvatar', auth.getAccountLocalstore().avatar)
    this.$store.dispatch('setStatus', auth.getAccountLocalstore().status)
    const theme = JSON.parse(localStorage.getItem('__theme'))
    if (theme) {
      this.$store.dispatch('setTheme', theme)
    }
    document.addEventListener('click', this.outsideClickPopupNav)
  },
  mounted () {
    this.$socket.emit('send_info_account', auth.getAccountLocalstore())
    var moveForce = 30 // max popup movement in pixels
    var rotateForce = 20 // max popup rotation in deg
    $(document).mousemove(function (e) {
      var docX = $(document).width()
      var docY = $(document).height()
      var moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce
      var moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce
      var rotateY = (e.pageX / docX * rotateForce * 2) - rotateForce
      var rotateX = -((e.pageY / docY * rotateForce * 2) - rotateForce)
      $('.popup-nav')
        .css('left', moveX + 'px')
        .css('top', moveY + 'px')
        .css('transform', 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)')
    })
  }
}
</script>
