import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import router from "@/router";
import useI18n, { transOptions } from "./models/use-i18n";
import store from "@/store";

const app = createApp(App);
app.config.globalProperties.store = store;
app.use(useI18n, transOptions).mount("#app");
