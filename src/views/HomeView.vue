<template>
  <v-img
    style="height: 100vh"
    cover
    src="https://content.wepik.com/statics/5677627/preview-page0.jpg"
  >
    <div class="main-overlay text-white text-center">
      <div class="animate__animated animate__fadeIn">
        <v-img :src="logo" style="height: 240px;filter: invert()" class="mb-8"></v-img>
        <h1 style="font-size: 30pt">โครงการค่ายยุวชนคอมพิวเตอร์ครั้งที่ 22</h1>
        <h3 style="font-size: 18pt" class="text-grey">ระบบจัดการและติดตามผลการเรียนรู้</h3>
      </div>

      <div class="mt-3 animate__animated animate__fadeIn" style="animation-delay: 1s">
        <v-btn class="ma-1" color="primary" prepend-icon="mdi-account-school" size="x-large"
          >เข้าสู่ระบบสำหรับนักเรียน</v-btn
        >
        <v-btn
          class="ma-1"
          prepend-icon="mdi-human-male-board"
          color="indigo-darken-2"
          size="x-large"
          >เข้าสู่ระบบสำหรับครู/อาจารย์</v-btn
        >
      </div>
    </div>
  </v-img>
</template>
<script>
import logo from "@/assets/logo.png";
export default {
  data() {
    return {
      logo
    };
  },
  created() {
    this.$emit("fetching", false);
  },
};
</script>
<style scoped>
.main-overlay {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
