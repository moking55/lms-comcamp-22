<template>
  <v-container fluid>
    <v-form v-model="createUserForm">
      <v-card>
        <v-card-title>
          <h3 class="mb-3">เพิ่มผู้ใช้งาน</h3>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="fullName" label="ชื่อ นามสกุล"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="username" label="ชื่อผู้ใช้งาน"></v-text-field>
              <v-btn size="x-small" variant="flat" @click="randomUsername('username', 6)"
                >สุ่มชื่อผู้ใช้งาน</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="password" label="รหัสผ่าน"></v-text-field>
              <v-btn size="x-small" variant="flat" @click="randomUsername('password')"
                >สุ่มรหัสผ่าน</v-btn
              >
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="email" type="email" label="อีเมล"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                label="สิทธิ์การใช้งาน"
                v-model="role"
                :items="['Student', 'Teacher', 'Admin']"
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="submitUserCreation">บันทึก</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      createUserForm: false,
      fullName: "",
      username: "",
      password: "",
      email: "",
      role: "Student"
    };
  },
  methods: {
    // select v-model from by parameter
    randomUsername(model, length = 8) {
      let result = "";
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this[model] = result;
    },
    submitUserCreation() {
      const credentials = new FormData();
      credentials.append("fullname", this.fullName);
      credentials.append("username", this.username);
      credentials.append("password", this.password);
      credentials.append("email", this.email);
      switch (this.role) {
        case "Teacher":
          credentials.append("is_teacher", 1);
          break;
        case "Admin":
          credentials.append("is_admin", 1);
          break;
      }
      axios
        .post(import.meta.env.VITE_APP_API_URL + "/auth/register", credentials)
        .then((res) => {
          console.log(res);
          this.$emit("snackbar", "บันทึกข้อมูลสำเร็จ");
          this.$router.push("/staff/users");
        })
        .catch((err) => {
          this.$emit("snackbar", "บันทึกข้อมูลไม่สำเร็จ " + err.response.data.messages.error);
          console.log(err.response.data.messages.error);
        });
    }
  }
};
</script>
<style></style>
