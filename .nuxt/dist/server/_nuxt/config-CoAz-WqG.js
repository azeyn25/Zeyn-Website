import "vue";
import { klona } from "klona";
import { a as useNuxtApp } from "../server.mjs";
import "hookable";
import { defuFn } from "defu";
const inlineConfig = {
  "nuxt": {}
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
export {
  useAppConfig as u
};
//# sourceMappingURL=config-CoAz-WqG.js.map
