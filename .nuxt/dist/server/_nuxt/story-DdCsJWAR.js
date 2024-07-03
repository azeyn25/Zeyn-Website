import _sfc_main$1 from "./Container-DHcGr0RE.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-DNe_xHrX.js";
import { _ as _sfc_main$2, a as __nuxt_component_3 } from "./Footer-BqOMaxuJ.js";
import { withCtx, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
import "./nuxt-link-DwSMCMKW.js";
import "@headlessui/vue";
import "@heroicons/vue/20/solid";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Container = _sfc_main$1;
  const _component_NuxtImg = __nuxt_component_1;
  const _component_Header = _sfc_main$2;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed inset-0 flex justify-center sm:px-8"><div class="flex w-full max-w-7xl lg:px-8"><div class="w-full bg-white ring-1 ring-zinc-200/50 dark:bg-zinc-900 dark:ring-zinc-500/20"></div></div></div>`);
  _push(ssrRenderComponent(_component_Container, { class: "relative" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute top-0 right-0"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtImg, {
          src: "img/bg-glow.png",
          "aria-hidden": "true",
          class: "w-[44rem]",
          format: "webp",
          width: "944",
          height: "586"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "absolute top-0 right-0" }, [
            createVNode(_component_NuxtImg, {
              src: "img/bg-glow.png",
              "aria-hidden": "true",
              class: "w-[44rem]",
              format: "webp",
              width: "944",
              height: "586"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="relative">`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main>`);
  _push(ssrRenderComponent(_component_Container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-12 lg:mt-24 maya-prose-story"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-12 lg:mt-24 maya-prose-story" }, [
            renderSlot(_ctx.$slots, "default")
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/story.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const story = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  story as default
};
//# sourceMappingURL=story-DdCsJWAR.js.map
