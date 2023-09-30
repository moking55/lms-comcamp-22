<template>
  <div>
    <h1 style="font-size: 30pt">โครงการค่ายยุวชนคอมพิวเตอร์ครั้งที่ 22</h1>
    <h3 style="font-size: 18pt" class="text-grey-lighten-2">ระบบจัดการและติดตามผลการเรียนรู้</h3>
    <div class="mt-3 animate__animated animate__fadeIn" style="animation-delay: 0.5s">
      <v-btn
        class="ma-1"
        color="primary"
        prepend-icon="mdi-account-school"
        size="x-large"
        @click="studentLogin"
      >
        เข้าสู่ระบบสำหรับนักเรียน
      </v-btn>
      <v-btn class="ma-1" prepend-icon="mdi-human-male-board" color="indigo-darken-2" size="x-large"
        >เข้าสู่ระบบสำหรับครู/อาจารย์</v-btn
      >
    </div>
  </div>
</template>
<script>
import StudentLogin from "@/components/StudentLogin.vue";

export default {
  methods: {
    studentLogin() {
      this.$emit("currentComponent", StudentLogin);
    }
  }
};
</script>
<style></style>
