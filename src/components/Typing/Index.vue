<template>
  <div>
    <div class="lds-ellipsis">
      <div :style="getTheme.bgIconsSearch"></div>
      <div :style="getTheme.bgIconsSearch"></div>
      <div :style="getTheme.bgIconsSearch"></div>
      <div :style="getTheme.bgIconsSearch"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getTheme'])
  }
}
</script>
<style lang="scss">
.lds-ellipsis {
  position: relative;
  width: 30px;
  height: 10px;
  margin-top: 12px;
  transform: scale(.6);
}
.lds-ellipsis div {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #000;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}
</style>
