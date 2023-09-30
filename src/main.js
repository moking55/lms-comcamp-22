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

app.mount("#app");
