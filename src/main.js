import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "animate.css";
import "@/assets/main.css";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import VueConfetti from "vue-confetti";


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: localStorage.getItem("theme") || "light",
  },
  icons: {
    iconfont: "mdi"
  }
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(VueConfetti);

app.mount("#app");
