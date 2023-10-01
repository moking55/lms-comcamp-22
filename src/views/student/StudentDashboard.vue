<template>
  <AppBarStudent />
  <v-row>
    <v-col cols="2" class="d-none d-lg-block"></v-col>
    <v-col cols="12" lg="">
      <div class="w-100" style="min-height: 100dvh">
        <transition name="fade" mode="out-in">
          <RouterView />
        </transition>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { RouterView } from "vue-router";
import AppBarStudent from "@/components/AppBarStudent.vue";

export default {
  components: {
    AppBarStudent,
    RouterView
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
