<template>
  <AppBarStudent />
  <v-row>
    <v-col cols="2" class="d-none d-lg-block"></v-col>
    <v-col cols="12" lg="">
      <div class="w-100" style="min-height: 100dvh">
          <RouterView />
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
</style>
