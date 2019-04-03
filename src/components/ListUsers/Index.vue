<template>
  <div class="webrtc--list--user" :class="{'webrtc--active__list--user': getShowListUser}" :style="getTheme.bgListUser">
    <div class="webrtc-container">
      <div class="webrtc-row">
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--form__search" :style="getTheme.bgSearch">
          <input type="text" placeholder="Search friends..." :style="getTheme.bgInputSearch">
          <div :style="getTheme.bgIconsSearch">
            <img :src="imgs.icons.SearchIcons" width="35">
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Vincent Porter</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__online"></span>
              <span class="green">online</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Aiden Chavez</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__busy"></span>
              <span class="orange">busy</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Mike Thomas</div>
            <div class="webrtc--info__status">
              <span :style="getTheme.bgOffline" class="webrtc--status__offline"></span>
              <span :style="getTheme.colorBlackLight">offline</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Erica Hughes</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__online"></span>
              <span class="green">online</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Ginger Johnston</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__busy"></span>
              <span class="orange">busy</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Tracy Carpenter</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__busy"></span>
              <span class="orange">busy</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Christian Kelly</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__online"></span>
              <span class="green">online</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Vincent Klarkent</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__online"></span>
              <span class="green">online</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Monica Ward</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__busy"></span>
              <span class="orange">busy</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Dean Henry</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__busy"></span>
              <span class="orange">busy</span>
            </div>
          </div>
        </div>
        <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">Peyton Mckinney</div>
            <div class="webrtc--info__status">
              <span class="webrtc--status__online"></span>
              <span class="green">online</span>
            </div>
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
  name: 'ListUsers',
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
    ...mapGetters(['getShowListUser', 'getTheme'])
  }
}
</script>
