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
import axios from "axios";
import jwt_decode from "jwt-decode";
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
        const data = new FormData();
        data.append("username", this.studentId);
        data.append("password", this.studentPassword);
        axios
          .post(import.meta.env.VITE_APP_API_URL + "/auth/login", data)
          .then((res) => {
            this.$emit("fetching", false);
            // store token to localstorage
            localStorage.setItem("token", res.data.token);
            const decoded = jwt_decode(localStorage.getItem("token"));
            if (decoded.is_teacher == 1 && decoded.is_admin != 1) {
              this.$router.push("/teacher");
            } else {
              this.$router.push("/student");
            }
          })
          .catch((err) => {
            this.$emit("fetching", false);
            this.$emit("snackbar", {
              show: true,
              text: err,
              color: "red"
            });
          });
      }
    },
    goback() {
      this.$emit("currentComponent", WelcomeLanding);
    }
  },
  created() {
    // if token is not expired or invalid, redirect to student dashboard
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      if (decoded.is_teacher == 1 && decoded.is_admin != 1) {
        this.$router.push("/teacher");
      } else {
        this.$router.push("/student");
      }
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
