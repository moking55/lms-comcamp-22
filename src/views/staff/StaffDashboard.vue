<template>
  <AppBarStaff />
  <v-main>
    <RouterView @fetching="(state) => $emit('fetching', state)" />
  </v-main>
</template>
<script>
import { RouterView } from "vue-router";
import AppBarStaff from "@/components/AppBarStaff.vue";
export default {
  components: {
    RouterView,
    AppBarStaff
  }
};
</script>
