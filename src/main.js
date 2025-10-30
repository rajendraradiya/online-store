import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import 'vuetify/styles' // required
import '@mdi/font/css/materialdesignicons.css' 

import vuetify from "./plugin/vuetify";

createApp(App).use(router).use(vuetify).mount("#app");
