<template>
  <div>
    <div id="popup-article" class="popup">
      <div class="screen-image">
        <div class="screen-slider">
          <img :src="$store.getters.getAvatar" alt="">
        </div>
        <div class="popup__block">
          <img v-for="(img, index) in imgs" :key="index" :src="img" @click="handleClick(img)" class="popup__block__image" alt="">
          <a href="#" class="popup__close">close</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgs from '@/router/images.js'
export default {
  data () {
    return {
      imgs: {...imgs.movies, ...imgs.emoji, ...imgs.jobs, ...imgs.flags},
      image: undefined
    }
  },
  methods: {
    handleClick (img) {
      this.$store.dispatch('setAvatar', img)
    }
  }
}
</script>
