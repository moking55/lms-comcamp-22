<template>
  <AppBarStaff />
  <v-main>
    <RouterView
    @fetching="(state) => $emit('fetching', state)"
    @snackbar="(text) => snackbarText = text"
    />
  </v-main>
  <v-snackbar v-model="snackbarText" timeout="2000">
    {{ snackbarText }}
  </v-snackbar>
</template>
<script>
import { RouterView } from "vue-router";
import AppBarStaff from "@/components/AppBarStaff.vue";
export default {
  components: {
    RouterView,
    AppBarStaff
  },
  data() {
    return {
      snackbarText: null
    };
  },
};
</script>
