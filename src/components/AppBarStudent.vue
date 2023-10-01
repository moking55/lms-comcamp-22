<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item class="d-flex py-4 justify-center profile-background">
        <div class="text-center">
          <v-img
            class="rounded-circle mb-3 mx-auto"
            src="https://cdn.vuetifyjs.com/images/lists/ali.png"
            width="120px"
          >
          </v-img>
          <p class="student-name" title="asdadMaythawat Mahawan">asdadMaythawat Mahawan</p>
          <small class="d-block text-grey">ID: vcjoqlasd</small>
          <v-btn size="x-small" variant="tonal" class="my-1" @click="toggleTheme" :icon="themeIcon">
          </v-btn>
          <div class="d-block">
            <v-btn size="x-small" variant="tonal" class="mx-1">ตั้งค่าบัญชี</v-btn>
            <v-btn size="x-small" variant="tonal" class="mx-1" color="red">ออกจากระบบ</v-btn>
          </div>
        </div>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="หน้าแรก" prepend-icon="mdi-home" to="/student"></v-list-item>
      <v-list-item link title="เนื้อหาการสอน" prepend-icon="mdi-book-open-page-variant" to="/student/class"></v-list-item>
      <v-list-item link title="เอกสารประกอบ" prepend-icon="mdi-folder" to="/student/document"></v-list-item>
      <v-list-item link title="สิ่งที่ต้องทำ" prepend-icon="mdi-clipboard-text" to="/student/assignment"></v-list-item>
    </v-navigation-drawer>
    <!-- appbar -->
    <v-app-bar class="d-lg-none" collapse :elevation="2">
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-btn icon @click="toggleTheme">
        <v-icon> {{ themeIcon }} </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { useTheme } from "vuetify";
import { ref } from "vue";
export default {
  data() {
    return {
      drawer: !this.isMobile(),
      isDarkTheme: localStorage.getItem("theme") === "dark"
    };
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  },
  setup() {
    const theme = useTheme();
    const themeIcon = ref(
      localStorage.getItem("theme") === "dark"
        ? "mdi-white-balance-sunny"
        : "mdi-moon-waning-crescent"
    );
    function toggleTheme() {
      const currentTheme = localStorage.getItem("theme");
      theme.global.name.value = currentTheme === "dark" ? "light" : "dark";
      themeIcon.value =
        currentTheme === "dark" ? "mdi-moon-waning-crescent" : "mdi-white-balance-sunny";
      localStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark");
    }
    return {
      toggleTheme,
      themeIcon
    };
  }
};
</script>
<style scoped>
.profile-background {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 40%, rgb(92, 210, 230) 100%);
}

.student-name {
  font-size: 16pt;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
