<template>
  <AppBarStudent />
  <v-main class="w-100" style="min-height: 100dvh">
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
  }
};
</script>
<style scoped></style>
