<template>
  <div class="webrtc--chat--box">
    <div class="webrtc--chat--box__first" :style="getTheme.bgTitleChatBot">
      <div class="webrtc-container-fluid">
        <div class="row">
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--chat--box__title" :style="getTheme.colorWLTitleChatBot">
            Chat with Vincent Porter
            <span :style="getTheme.colorWLTitleChatBot">
              <span class="webrtc--status__online"></span>35 people online
            </span>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--chat--box__participants">
            <span :style="getTheme.colorWLTitleChatBot">
              <img :src="imgs.icons.TeamWork" alt> 62 participants
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
        <div class="row">
          <div class="webrtc-col-12">
            <div class="webrtc--form__message">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Vincent Porter</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMS"
                  >Hi Vincent, how are you? How is the project coming along?</div>
                </div>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12">
            <div class="webrtc--form__message webrtc--form__reply d-f-row-reverse">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Ginger Johnston</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMSRep"
                  >Are we meeting today? Project has been already finished and I have results to show you.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12">
            <div class="webrtc--form__message">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Tracy Carpenter</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMS"
                  >Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?</div>
                </div>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12">
            <div class="webrtc--form__message">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Tracy Carpenter</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMS"
                  >The waves were crashing on the shore; it was a lovely sight</div>
                </div>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12">
            <div class="webrtc--form__message webrtc--form__reply d-f-row-reverse">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Ginger Johnston</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMSRep"
                  >Actually everything was fine. I'm very excited to show this to our team.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12">
            <div class="webrtc--form__message">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Monica Ward</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMS"
                  >Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?</div>
                </div>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12">
            <div class="webrtc--form__message webrtc--form__reply d-f-row-reverse">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Ginger Johnston</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMSRep"
                  >Wednesday is hump day, but has anyone asked the camel if he’s happy about it?</div>
                </div>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12">
            <div class="webrtc--form__message">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg"
                class="webrtc--message__image"
                alt
              >
              <div class="webrtc--message__content">
                <div class="webrtc--message__name">
                  <div class="webrtc--message__info">
                    <span class="webrtc--status__online"></span>
                    <span :style="getTheme.colorWLTitleChatBot">Christian Kelly</span>
                    <span :style="getTheme.colorWTitleChatBot">2:14pm</span>
                  </div>
                  <div
                    class="webrtc--message__ms"
                    :style="getTheme.colorMS"
                  >Sixty-Four comes asking for bread.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="webrtc--chat--box__third" :style="getTheme.bgThirdChatBox">
      <div class="webrtc--cb__third--form">
        <textarea class="webrtc--third--form__input"  :style="getTheme.bgInput" autoresize></textarea>
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
            <button @click="showBoxEmoji = {...showBoxEmoji, flag: true, emoji: false}">
              <img :src="imgs.flags.flag52" alt>
            </button>
            <button @click="showBoxEmoji = {...showBoxEmoji, flag: false, emoji: true}">
              <img :src="imgs.emoji.emoji14" alt>
            </button>
          </div>
          <div class="webrtc--box__icons" v-if="showBoxEmoji.flag">
            <img v-for="(img, index) in imgs.flags" :key="index" :src="img" alt>
          </div>
          <div class="webrtc--box__icons" v-if="showBoxEmoji.emoji">
            <img v-for="(img, index) in imgs.emoji" :key="index" :src="img" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgs from '@/router/images.js'
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  name: 'ChatBox',
  data () {
    return {
      imgs,
      showBoxEmoji: {
        status: false,
        flag: true,
        emoji: false
      }
    }
  },
  computed: {
    ...mapGetters(['getTheme'])
  },
  methods: {
    outsideClickListenerNav (e) {
      this.showBoxEmoji.status = _.find([...e.path], i => i === this.$refs.boxEmoji) !== undefined
    }
  },
  mounted () {
    this.$refs.screenChat.scrollTo(0, this.$refs.screenChat.scrollHeight)
  },
  created () {
    document.addEventListener('mouseup', this.outsideClickListenerNav)
  }
}
</script>
