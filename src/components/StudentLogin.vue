<template>
  <div class="animate__animated animate__fadeInUp glass-bg pa-10" elevation="3">
    <h1>เข้าสู่ระบบสำหรับนักเรียน</h1>
    <center class="mt-5">
      <v-form style="max-width: 400px" ref="studentform">
        <v-text-field
          v-model="studentId"
          label="รหัสนักเรียน"
          outlined
          dense
          :rules="studentIdRules"
          required
        ></v-text-field>
        <v-text-field
          v-model="studentPassword"
          type="password"
          label="รหัสผ่าน"
          outlined
          dense
          :rules="studentPasswordRules"
          required
        ></v-text-field>
        <v-btn color="primary" class="ma-1" @click="login">เข้าสู่ระบบ</v-btn>
        <v-btn color="red" class="ma-1" @click="goback">ยกเลิก</v-btn>
      </v-form>
    </center>
  </div>
</template>
<script>
import WelcomeLanding from "./WelcomeLanding.vue";
export default {
  data() {
    return {
      studentId: "",
      studentPassword: "",
      studentIdRules: [(v) => !v || "กรุณากรอกรหัสนักเรียน"],
      studentPasswordRules: [(v) => !v || "กรุณากรอกรหัสผ่าน"]
    };
  },
  methods: {
    login() {
      if (this.$refs.studentform.validate()) {
        this.$emit("fetching", true);
        /* this.$store
          .dispatch("login", {
            studentId: this.studentId,
            studentPassword: this.studentPassword
          })
          .then((res) => {
            this.$emit("fetching", false);
            if (res) {
              this.$router.push("/student");
            }
          }); */
      }
    },
    goback() {
      this.$emit("currentComponent", WelcomeLanding);
    }
  }
};
</script>
<style scoped>
.glass-bg {
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  width: fit-content;
  margin: auto;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}
</style>
