<template>
  <v-navigation-drawer v-model="drawer" expand-on-hover app :permanent="!isMobile()">
    <v-list-item
      height="200px"
      class="d-flex justify-center text-center text-white profile-background"
    >
      <v-icon size="x-large" class="mb-2">mdi-wrench</v-icon>
      <h3 class="animate__animated animate__fadeOut" style="animation-delay: 2s">
        {{ currentText }}
      </h3>
    </v-list-item>
    <v-list-item
      link
      title="แผงควบคุม"
      prepend-icon="mdi-home"
      :to="{ name: 'staff-home' }"
    ></v-list-item>
    <v-list-item
      link
      title="เนื้อหาการสอน"
      prepend-icon="mdi-book-open-page-variant"
      :to="{ name: 'staff-class' }"
    ></v-list-item>
    <v-list-item
      link
      title="เอกสารประกอบ"
      prepend-icon="mdi-folder"
      :to="{ name: 'staff-document' }"
    ></v-list-item>
    <v-list-item
      link
      title="งานในชั้นเรียน"
      prepend-icon="mdi-clipboard-text"
      :to="{ name: 'staff-works' }"
    ></v-list-item>
    <v-list-item
      link
      title="คิวอาร์โค้ด"
      prepend-icon="mdi-qrcode"
      :to="{ name: 'staff-qrcode' }"
    ></v-list-item>
    <v-list v-model:opened="open">
      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-access-point" title="Advance"></v-list-item>
        </template>
        <v-list-item
          link
          key="ads"
          title="จัดการผู้ใช้"
          prepend-icon="mdi-account"
          :to="{ name: 'staff-users-main' }"
        ></v-list-item>
        <v-list-item
          link
          key="ads"
          title="ตั้งค่า QR Code"
          prepend-icon="mdi-qrcode"
          :to="{ name: 'staff-qrcode' }"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <!-- appbar -->
  <v-app-bar v-if="isMobile()" collapse :absolute="true" :elevation="2">
    <v-btn icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-btn icon @click="toggleTheme">
      <v-icon> {{ themeIcon }} </v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { useTheme } from "vuetify";
import { ref } from "vue";
export default {
  data() {
    return {
      drawer: !this.isMobile(),
      isDarkTheme: localStorage.getItem("theme") === "dark",
      currentText: "Welcome",
      open: ["Admin"]
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
  },
  created() {
    // delay 2.5s to change currentText
    setTimeout(() => {
      this.currentText = "TA Dashboard";
      // remove fade out animation
      document.querySelector(".animate__fadeOut").classList.remove("animate__fadeOut");
      // add fade in delay 3s
      document.querySelector("h3").classList.add("animate__animated", "animate__fadeIn");
    }, 2600);
  }
};
</script>
<style scoped>
.profile-background {
  background: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}

.student-name {
  font-size: 16pt;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* hide an element after animation fade out finished */
.animate__fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
</style>
