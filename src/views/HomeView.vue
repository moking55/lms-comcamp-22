<template>
  <v-img style="height: 100vh" cover src="https://wallpaperaccess.com/full/1639572.jpg">
    <div class="main-overlay text-white text-center">
      <div class="animate__animated animate__fadeIn">
        <v-img :src="logo" style="height: 240px; filter: invert()" class="mb-8"></v-img>
        <component
          :is="currentComponent"
          @current-component="(setComponent) => (currentComponent = setComponent)"
          @fetching="(state) => $emit('fetching', state)"
        ></component>
      </div>
    </div>
  </v-img>
</template>
<script>
import logo from "@/assets/logo.png";
import WelcomeLanding from "@/components/WelcomeLanding.vue";
export default {
  data() {
    return {
      WelcomeLanding,
      logo,
      currentComponent: WelcomeLanding
    };
  },
  created() {
    this.$emit("fetching", false);
  }
};
</script>
<style scoped>
.main-overlay {
  background: radial-gradient(
    circle,
    rgba(83, 52, 131, 0.3) 0%,
    rgba(83, 52, 131, 0.5) 25%,
    rgba(37, 29, 58, 0.8) 100%
  );
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
