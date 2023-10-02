<template>
  <v-app>
    <div style="position: absolute; width: 100vw; top: 0; z-index: 5">
      <!-- applied emit -->
      <v-progress-linear color="amber" indeterminate v-if="loading"></v-progress-linear>
    </div>
    <RouterView @fetching="(state) => (loading = state)" />
  </v-app>
</template>
<script>
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView
  },
  data() {
    return {
      loading: false
    };
  }
  // emit loading event
};
</script>
<style></style>
