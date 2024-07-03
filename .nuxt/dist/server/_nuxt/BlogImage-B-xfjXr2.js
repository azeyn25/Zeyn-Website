import { _ as __nuxt_component_1 } from "./nuxt-img-DNe_xHrX.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "destr";
import "klona";
import "ohash";
import "cookie-es";
import "rellax";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlogImage",
  __ssrInlineRender: true,
  props: {
    src: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      if (_ctx.src) {
        _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
          placeholder: "",
          sizes: "sm:100vw md:70vw",
          class: "w-full",
          src: _ctx.src,
          alt: _ctx.alt,
          loading: "lazy"
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/BlogImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=BlogImage-B-xfjXr2.js.map
