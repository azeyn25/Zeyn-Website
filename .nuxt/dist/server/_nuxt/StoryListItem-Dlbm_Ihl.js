import { _ as __nuxt_component_0 } from "./nuxt-link-DwSMCMKW.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-DNe_xHrX.js";
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ufo";
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
import "devalue";
import "destr";
import "klona";
import "ohash";
import "cookie-es";
import "rellax";
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StoryListItem",
  __ssrInlineRender: true,
  props: {
    story: {
      type: Object,
      required: true,
      validator: (value) => {
        if ((value == null ? void 0 : value._path) && (value == null ? void 0 : value.title)) {
          return true;
        }
        return false;
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.story._path,
        class: "group"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="relative w-full overflow-hidden rounded-lg sm:aspect-[3/2] md:aspect-square lg:aspect-[2/3] dark:bg-zinc-800"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: ((_a = __props.story.cover) == null ? void 0 : _a.src) || "img/placeholder.jpg",
              alt: ((_b = __props.story.cover) == null ? void 0 : _b.alt) || __props.story.title,
              width: ((_c = __props.story.cover) == null ? void 0 : _c.width) || 2,
              height: ((_d = __props.story.cover) == null ? void 0 : _d.height) || 3,
              class: "h-full w-full object-cover object-center group-hover:opacity-75",
              sizes: "sm:100vw md:50vw lg:30vw",
              loading: "lazy",
              placeholder: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-between text-base font-medium dark:text-zinc-300"${_scopeId}><h3${_scopeId}>${ssrInterpolate(__props.story.title)}</h3></div>`);
            if (__props.story.date) {
              _push2(`<p class="mt-1 text-sm italic dark:text-zinc-500"${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(__props.story.date))}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "relative w-full overflow-hidden rounded-lg sm:aspect-[3/2] md:aspect-square lg:aspect-[2/3] dark:bg-zinc-800" }, [
                createVNode(_component_NuxtImg, {
                  src: ((_e = __props.story.cover) == null ? void 0 : _e.src) || "img/placeholder.jpg",
                  alt: ((_f = __props.story.cover) == null ? void 0 : _f.alt) || __props.story.title,
                  width: ((_g = __props.story.cover) == null ? void 0 : _g.width) || 2,
                  height: ((_h = __props.story.cover) == null ? void 0 : _h.height) || 3,
                  class: "h-full w-full object-cover object-center group-hover:opacity-75",
                  sizes: "sm:100vw md:50vw lg:30vw",
                  loading: "lazy",
                  placeholder: ""
                }, null, 8, ["src", "alt", "width", "height"])
              ]),
              createVNode("div", { class: "mt-4 flex items-center justify-between text-base font-medium dark:text-zinc-300" }, [
                createVNode("h3", null, toDisplayString(__props.story.title), 1)
              ]),
              __props.story.date ? (openBlock(), createBlock("p", {
                key: 0,
                class: "mt-1 text-sm italic dark:text-zinc-500"
              }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(__props.story.date)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/StoryListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=StoryListItem-Dlbm_Ihl.js.map
