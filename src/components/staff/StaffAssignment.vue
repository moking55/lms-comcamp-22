<template>
  <v-img
    class="animate__animated animate__slideInDown staff-header-animation-speed-500ms"
    height="200px"
    cover
    src="https://in.ivao.aero/admin/core/uploads/Web/heading8.jpg"
  >
    <div
      style="background: rgba(0, 0, 0, 0.2); align-items: center"
      class="text-white w-100 h-100 d-flex"
    >
      <v-container fluid class="d-flex justify-space-between align-center">
        <h2>งานในชั้นเรียน</h2>
        <v-btn class="bg-success" size="x-large" prepend-icon="mdi-plus" :to="{ name: 'staff-works-create' }"
          >เพิ่มงานใหม่</v-btn
        >
      </v-container>
    </div>
  </v-img>
  <RouterView />
</template>
<script>
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView
  }
};
</script>
<style scoped></style>
