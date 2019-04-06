<template>
    <div class="main-login">
      <div id="container">
        <img class="logo" src="http://www.cfdesigner.com/codepen/rocket-page-logo.png">
        <h1><span class="orange">Rocket</span> Chat</h1>
        <section class="welcome">
          <p>Say anything together about your world</p>
          <ul class="buttons">
            <li>
              <a class="primary" href="#">Log In</a>
            </li>
            <li>
              <a href="https://github.com/binhthien80/realtime-chat" target="_black" class="webrtc-social">
              <div>
                <span>Explore Source code</span>
                <img :src="Github" width="30" alt="">
              </div>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/datbatista.dd" target="_black" class="webrtc-social">
                <div>
                  <span>Go to the author's facebook</span>
                  <img :src="Facebook" width="30" alt="">
                </div>
              </a>
            </li>
          </ul>
        </section>

        <form id="login" class="hidden">
          <section>
            <div class="field">
              <label for="username">
                <svg class="icon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
                </svg>
              </label>
              <input type="text" name="username" placeholder="Username" v-model="username">
            </div>
            <div class="field">
              <a href="#popup-article" class="open-popup">
                <img :src="$store.getters.getAvatar || icontImage" width="40" alt="">
                <span v-if="!$store.getters.getAvatar"> Click choose avatar </span>
              </a>
            </div>
          </section>
          <ul class="buttons">
            <li>
              <input type="submit" value="Log In" class="primary disabled" @click.prevent.stop="handleLogin()">
            </li>
            <li>
              <a href="#" class="minor">&#10229; Go back</a>
            </li>
          </ul>
        </form>
      </div>

      <div id="footer">
        <ul>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" class="icons hidden">
        <symbol
          id="user"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="6.25%"
        >
          <path
            d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"
          ></path>
        </symbol>
      </svg>
      <Images />
    </div>
</template>
<script>
import Login from '@/assets/images/login.png'
import icontImage from '@/assets/images/svg/movies25.svg'
import Github from '@/assets/images/github.svg'
import Facebook from '@/assets/images/facebook.svg'
import Images from '@/components/Images/Index'
import $ from 'jquery'
import _ from 'lodash'
export default {
  name: 'Login',
  components: {
    Images
  },
  sockets: {
    server_send_arrayUser_to_client: function (data) {
      this.$store.dispatch('setListUsers', data.arrayUser)
      localStorage.setItem('id', data.id)
    }
  },
  data () {
    return {
      Login,
      icontImage,
      Github,
      Facebook
    }
  },
  computed: {
    username: {
      get () {
        return this.$store.getters.getUsername
      },
      set (val) {
        this.$store.dispatch('setUsername', val.trim())
      }
    },
    checkLogin: {
      get () {
        return this.$store.getters.checkLogin
      }
    }
  },
  methods: {
    handleLogin () {
      const existUsername = !_.find(this.$store.getters.getList, {username: this.$store.getters.getUsername})
      if (this.$store.getters.getUsername && this.$store.getters.getAvatar && existUsername) {
        const account = {
          username: this.$store.getters.getUsername,
          avatar: this.$store.getters.getAvatar,
          status: 'online',
          id: localStorage.getItem('id')
        }
        localStorage.setItem('__account', JSON.stringify(account))
        this.$router.push('/')
        this.$snotify.success('Hope you have a fun time', 'Login successfully')
      } else {
        this.$snotify.error('User name already exists', 'Exist Username', { timeout: 2000 })
      }
    }
  },
  mounted () {
    this.$socket.emit('client_get_arrayuser_server')
    $('.welcome .primary').click(function () {
      $('.welcome').hide()
      $('form').fadeIn()
    })
    // display welcome
    $('form .minor').click(function () {
      $('form').hide()
      $('.welcome').fadeIn()
    })
    // form validation
    $(document).click(() => {
      if (this.$store.getters.getUsername && this.$store.getters.getAvatar) { // && password.length > 0
        $('form .primary').removeClass('disabled')
      } else {
        $('form .primary').addClass('disabled')
      }
    })
    $('input').keyup(() => {
      if (this.$store.getters.getUsername && this.$store.getters.getAvatar) { // && password.length > 0
        $('form .primary').removeClass('disabled')
      } else {
        $('form .primary').addClass('disabled')
      }
    })
  }
}
</script>
