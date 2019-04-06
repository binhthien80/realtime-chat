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
        <div v-for="(user, index) in getListUsers" :key="index" class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
          <img
            :src="user.avatar"
            alt="avatar"
            :style="getTheme.borderAvtUser"
          >
          <div class="webrtc--info">
            <div class="webrtc--info__name" :style="getTheme.colorBlackLight">{{user.username}}</div>
            <div class="webrtc--info__status">
              <span :class="{'webrtc--status__online': user.status === 'online', 'webrtc--status__busy': user.status === 'busy', 'webrtc--status__offline': user.status === 'offline', 'webrtc--status__away': user.status === 'away'}"></span>
              <span :class="{'green': user.status === 'online', 'red': user.status === 'busy', 'orange': user.status === 'away'}">{{user.status}}</span>
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
    ...mapGetters(['getShowListUser', 'getTheme', 'getListUsers'])
  }
}
</script>
