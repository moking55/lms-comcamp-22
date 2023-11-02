<template>
  <AppBarStudent />
  <v-main class="w-100" style="min-height: 100dvh" :class="{ 'no-appbar-spacing': isMobile() }">
    <RouterView @fetching="(state) => $emit('fetching', state)" />
  </v-main>
</template>
<script>
import { RouterView } from "vue-router";
import AppBarStudent from "@/components/AppBarStudent.vue";

export default {
  components: {
    AppBarStudent,
    RouterView
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  }
};
</script>
<style scoped>
.no-appbar-spacing {
  margin-top: -64px;
}
</style>
