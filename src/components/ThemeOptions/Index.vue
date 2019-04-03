<template>
    <div class="webrtc--theme__options" ref="showTheme">
        <img :src="imgs.icons.Cog" alt="" @click="showThemeOptions = !showThemeOptions">
        <div class="webrtc--theme__box" v-if="showThemeOptions">
            <img :src="imgs.icons.ThemeDark" alt="" @click="setDarkTheme">
            <img :src="imgs.icons.ThemeLight" alt="" @click="setLigthTheme">
        </div>
    </div>
</template>
<script>
import imgs from '@/router/images.js'

import { mapActions } from 'vuex'

export default {
  name: 'ThemeOptions',
  data () {
    return {
      imgs,
      showThemeOptions: false
    }
  },
  methods: {
    ...mapActions(['setLigthTheme', 'setDarkTheme']),
    outsideClickListenerNav (e) {
    //   this.showThemeOptions = _.find([...e.path], i => i === this.$refs.showTheme) !== undefined
    //   console.log(this.showThemeOptions)
    }
  },
  created () {
    // document.addEventListener('mouseup', this.outsideClickListenerNav)
  }
}
</script>
