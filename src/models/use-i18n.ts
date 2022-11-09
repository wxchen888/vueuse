import { createApp } from "vue";
import type { InjectionKey } from "vue";

export const i18n = Symbol() as InjectionKey<typeof transOptions>;

export const transOptions = {
  greetings: {
    hello: "Bonjour"
  },
  common: {
    button: "按钮",
    form: "表单"
  }
};

export default {
  install: function (
    app: ReturnType<typeof createApp>,
    options: typeof transOptions
  ) {
    app.config.globalProperties.$translate = (key: string) => {
      return key.split(".").reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };

    app.provide(i18n, options);
  }
};
