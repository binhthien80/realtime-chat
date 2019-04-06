<template>
  <div class="webrtc--chat--box">
    <div class="webrtc--chat--box__first" :style="getTheme.bgTitleChatBot">
      <div class="webrtc-container-fluid">
        <div class="row">
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--chat--box__title" :style="getTheme.colorWLTitleChatBot">
            Chat with Vincent Porter
            <span :style="getTheme.colorWLTitleChatBot">
              <span class="webrtc--status__online"></span>{{getCountUsersOnline}} people online
            </span>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--chat--box__participants">
            <span :style="getTheme.colorWLTitleChatBot">
              <img :src="imgs.icons.TeamWork" alt> {{getCountUsers}} participants
            </span>
            <span :style="getTheme.colorWLTitleChatBot">
              <img :src="imgs.icons.DigitalCampaign" alt> Gallery
            </span>
            <span :style="getTheme.colorWLTitleChatBot">
              <img :src="imgs.icons.Location" alt> find
            </span>
          </div>
        </div>
      </div>
      <div class="webrtc-rating" :style="getTheme.borderStar">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    </div>
    <div class="webrtc--chat--box__second" ref="screenChat" :style="getTheme.bgContentChatBox">
      <div class="webrtc-container">
        <div class="row" ref="webrtcAppendMessage">
          <div v-for="(ms, i) in ListMassage" :key="i">
            <Message :propsMessage="ms.message" v-if="ms.Message && ms.message"/>
            <MessageReply :propsMessage="ms.message" v-if="ms.MessageReply && ms.message"/>
            <Message :propsEmoji="ms.emoji" v-if="ms.Message && ms.emoji"/>
            <MessageReply :propsEmoji="ms.emoji" v-if="ms.MessageReply && ms.emoji"/>
          </div>
        </div>
      </div>
    </div>
    <div class="webrtc--chat--box__third" :style="getTheme.bgThirdChatBox">
      <div class="webrtc-typering">
        <div class="webrtc-typering__clone" v-for="(typer, i) in getListTyping" :key="i">
          <img :src="typer.avatar" alt="">
          <span :style="getTheme.colorWTitleChatBot">{{typer.username}}</span>
          <Typing/>
        </div>
      </div>
      <div class="webrtc--cb__third--form">
        <textarea class="webrtc--third--form__input" :style="getTheme.bgInput" @keyup="sendMessage($event)" v-model="setMessage" autofocus autoresize></textarea>
        <div class="webrtc--third--form__icons"  :style="getTheme.bgInput">
          <img
            :src="imgs.emoji.emoji23"
            alt
            class="webrtc--third--form__emoji"
            v-on:click="showBoxEmoji.status = !showBoxEmoji.status"
          >
        </div>
        <div class="webrtc--box__emoji" ref="boxEmoji" v-if="showBoxEmoji.status">
          <div class="webrtc--box__title">
            <button @click="showBoxEmoji = {...showBoxEmoji, flag: false, emoji: true, jobs: false, movies: false}">
              <img :src="imgs.emoji.emoji84" alt>
            </button>
            <button @click="showBoxEmoji = {...showBoxEmoji, flag: false, emoji: false, jobs: true, movies: false}">
              <img :src="imgs.jobs.jobs10" alt>
            </button>
            <button @click="showBoxEmoji = {...showBoxEmoji, flag: false, emoji: false, jobs: false, movies: true}">
              <img :src="imgs.movies.movies10" alt>
            </button>
            <button @click="showBoxEmoji = {...showBoxEmoji, flag: true, emoji: false, jobs: false, movies: false}">
              <img :src="imgs.flags.flag52" alt>
            </button>
          </div>
          <div class="webrtc--box__icons" v-if="showBoxEmoji.emoji">
            <img v-for="(img, index) in imgs.emoji" :key="index" :src="img" @click="sendEmoji(img)" alt>
          </div>
          <div class="webrtc--box__icons" v-if="showBoxEmoji.jobs">
            <img v-for="(img, index) in imgs.jobs" :key="index" :src="img" @click="sendEmoji(img)" alt>
          </div>
          <div class="webrtc--box__icons" v-if="showBoxEmoji.movies">
            <img v-for="(img, index) in imgs.movies" :key="index" :src="img" @click="sendEmoji(img)" alt>
          </div>
          <div class="webrtc--box__icons" v-if="showBoxEmoji.flag">
            <img v-for="(img, index) in imgs.flags" :key="index" :src="img" @click="sendEmoji(img)" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import imgs from '@/router/images.js'
import { mapGetters } from 'vuex'
import Message from '@/components/Message/Index'
import MessageReply from '@/components/MessageReply/Index'
import Typing from '@/components/Typing/Index'

export default {
  name: 'ChatBox',
  components: {
    MessageReply,
    Message,
    Typing
  },
  data () {
    return {
      imgs,
      showBoxEmoji: {
        status: false,
        flag: false,
        emoji: true,
        jobs: false,
        movies: false
      },
      ListMassage: []
    }
  },
  sockets: {
    server_send_broadcast_message_client: function (data) {
      if (data.username === this.$store.getters.getUsername) {
        this.ListMassage.push({message: data, MessageReply})
      } else {
        this.ListMassage.push({message: data, Message})
      }
      setTimeout(() => this.scrollToBottomChat(), 0)
    },
    server_send_broadcast_emoji_client: function (data) {
      if (data.username === this.$store.getters.getUsername) {
        this.ListMassage.push({emoji: data, MessageReply})
      } else {
        this.ListMassage.push({emoji: data, Message})
      }
      setTimeout(() => this.scrollToBottomChat(), 0)
    },
    server_send_typing_client: function (data) {
      this.$store.dispatch('setListTyping', data)
    }
  },
  computed: {
    ...mapGetters(['getTheme', 'getMessage', 'getCountUsers', 'getListTyping', 'getCountUsersOnline']),
    setMessage: {
      get () {
        return this.$store.getters.getMessage
      },
      set (val) {
        this.$store.dispatch('setMessage', val)
      }
    }
  },
  methods: {
    outsideClickListenerNav (e) {
      if (_.find([...e.path], i => i === this.$refs.popupNav)) {
        this.$store.dispatch('mulShowPopupNav', false)
      }
      this.showBoxEmoji.status = _.find([...e.path], i => i === this.$refs.boxEmoji) !== undefined
    },
    sendMessage: function (e) {
      if (!this.$store.getters.getMessage.trim()) {
        this.$socket.emit('client_send_typing_server', {...this.$store.getters.getAccount, typing: false})
      }
      if (e.shiftKey) {
        return
      }
      if (e.keyCode === 13) {
        if (this.$store.getters.getMessage.trim().length > 0) {
          const __message = { ...this.$store.getters.getAccount, message: this.$store.getters.getMessage, time: this.getTime() }
          this.$socket.emit('client_send_message_server', __message)
          this.$socket.emit('client_send_typing_server', {...this.$store.getters.getAccount, typing: false})
        }
        this.$store.dispatch('setMessage', '')
      }
      const inListTyping = _.find(this.$store.getters.getListTyping, {username: this.$store.getters.getUsername})
      if (!inListTyping) {
        this.$socket.emit('client_send_typing_server', {...this.$store.getters.getAccount, typing: true})
      }
    },
    sendEmoji: function (e) {
      const __message = { ...this.$store.getters.getAccount, emoji: e, time: this.getTime() }
      this.$socket.emit('client_send_emoji_server', __message)
    },
    scrollToBottomChat: function () {
      this.$refs.screenChat.scrollTo(0, this.$refs.screenChat.scrollHeight)
    },
    getTime: function () {
      var currentdate = new Date()
      return currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + '/' + currentdate.getFullYear() + ' - ' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds()
    }
  },
  created () {
    document.addEventListener('mouseup', this.outsideClickListenerNav)
  }
}
</script>
