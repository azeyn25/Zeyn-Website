import { _ as __nuxt_component_1 } from "./nuxt-img-DNe_xHrX.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "ThreeImages",
  __ssrInlineRender: true,
  props: {
    src1: {},
    alt1: {},
    src2: {},
    alt2: {},
    src3: {},
    alt3: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose pb-8 grid lg:grid-cols-3 gap-3 lg:gap-6 aspect-[1] sm:aspect-[4/3] lg:aspect-[4/3] lg:-mr-12 lg:-ml-12" }, _attrs))}><div class="col-span-2 row-span-2 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.src1,
        alt: _ctx.alt1,
        loading: "lazy",
        class: "h-full w-full object-cover object-center",
        sizes: "sm:100vw md:50vw"
      }, null, _parent));
      _push(`</div><div class="col-span-1 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.src2,
        alt: _ctx.alt2,
        loading: "lazy",
        class: "h-full w-full object-cover object-center",
        sizes: "sm:100vw md:30vw"
      }, null, _parent));
      _push(`</div><div class="col-span-1 dark:bg-gray-800 rounded-md lg:rounded-xl overflow-hidden">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: _ctx.src3,
        alt: _ctx.alt3,
        loading: "lazy",
        class: "h-full w-full object-cover object-center",
        sizes: "sm:100vw md:30vw"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ThreeImages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ThreeImages-DDOWyqyG.js.map
