<template>
    <div class="webrtc--theme__options" ref="showTheme" :style="getTheme.bgWheel">
        <img :src="imgs.icons.Cog" alt="" @click="showThemeOptions = !showThemeOptions">
        <div class="webrtc--theme__box" v-if="showThemeOptions">
            <img :src="imgs.icons.Menu" alt="" @click="mulShowPopupNav(true)">
            <img :src="imgs.icons.ThemeDark" alt="" @click="setDarkTheme">
            <img :src="imgs.icons.ThemeLight" alt="" @click="setLightDarkTheme">
            <img :src="imgs.icons.ThemeLightDark" alt="" @click="setLigthTheme">
            <img :src="imgs.icons.ThemeDarkLight" alt="" @click="setDarkLightTheme">
        </div>
    </div>
</template>
<script>
import imgs from '@/router/images.js'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ThemeOptions',
  data () {
    return {
      imgs,
      showThemeOptions: false
    }
  },
  computed: {
    ...mapGetters(['getTheme'])
  },
  methods: {
    ...mapActions(['setLigthTheme', 'setDarkTheme', 'setDarkLightTheme', 'setLightDarkTheme', 'mulShowPopupNav']),
    outsideClickListenerNav (e) {
    }
  }
}
</script>
