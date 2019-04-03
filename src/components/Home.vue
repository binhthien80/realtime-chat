<template>
  <div class="webrtc--main">
    <ListUsers />
    <ChatBox />
    <div class="webrtc--button__show" v-on:click="handleShowListUser(!getShowListUser)">
      <img :src="Chat" alt width="25">
    </div>
    <ThemeOptions />
  </div>
</template>
<script>
import ListUsers from '@/components/ListUsers/Index.vue'
import ChatBox from '@/components/ChatBox/Index.vue'
import ThemeOptions from '@/components/ThemeOptions/Index.vue'
import Chat from '@/assets/images/chat.svg'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ListUsers,
    ChatBox,
    ThemeOptions
  },
  data () {
    return {
      Chat
    }
  },
  computed: {
    ...mapGetters(['getShowListUser'])
  },
  methods: {
    handleShowListUser (e) {
      this.$store.dispatch('mulShowListUser', e)
    }
  }
}
</script>
