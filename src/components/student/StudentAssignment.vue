<template>
  <div class="header-spacing">
    <div class="subheader-texture"></div>
  </div>

  <RouterView @fetching="(state) => $emit('fetching', state)" />
</template>
<script>
import grass_texture from "@/assets/mc_texture_bottom.png";
export default {
  data() {
    return {
      grass_texture
    };
  },
};
</script>
<style scoped>
.header-spacing {
  position: relative;
  height: 64px;
  background: url("https://art.pixilart.com/dcf1d6ffc5cdc68.png");
  background-size: 54px;
  z-index: 1;
}
.subheader-texture {
  position: absolute;
  background: url("https://i.imgur.com/TFyz9Nx.png");
  background-size: contain;
  z-index: 0;
  width: 100%;
  bottom: -10px;
  height: 16px;
}
</style>
