<template>
  <div>
    <div class="webrtc-col-12">
      <div class="webrtc--form__message webrtc--form__reply d-f-row-reverse">
        <img
          :src="(message && message.avatar) || (emoji && emoji.avatar)"
          class="webrtc--message__image"
          alt
        >
        <div class="webrtc--message__content">
          <div class="webrtc--message__name">
            <div class="webrtc--message__info">
              <span class="webrtc--status__online"></span>
              <span :style="getTheme.colorWLTitleChatBot">{{(message && message.username) || (emoji && emoji.username)}}</span>
              <span :style="getTheme.colorWTitleChatBot">{{(message && message.time) || (emoji && emoji.time)}}</span>
            </div>
            <div
              class="webrtc--message__ms"
              :style="getTheme.colorMSRep"
              v-if="message"
              >{{message && message.message}}</div>
             <img :src="emoji.emoji" alt="" v-if="emoji" class="webrtc-ms__emoji">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgs from '@/router/images.js'
import { mapGetters } from 'vuex'
export default {
  name: 'MessageReply',
  props: ['propsMessage', 'propsEmoji'],
  data () {
    return {
      imgs,
      showBoxEmoji: {
        status: false,
        flag: true,
        emoji: false,
        jobs: false,
        movies: false
      },
      message: this.propsMessage || undefined,
      emoji: this.propsEmoji || undefined
    }
  },
  sockets: {
  },
  computed: {
    ...mapGetters(['getTheme', 'getMessage'])
  },
  methods: {
  }
}
</script>
