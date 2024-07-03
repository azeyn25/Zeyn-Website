import _sfc_main$1 from "./GalleryListItem-Nmq3QWpB.js";
import { u as useAsyncData } from "./asyncData-0Ivy9NBH.js";
import { q as queryContent } from "../server.mjs";
import { defineComponent, withAsyncContext, computed, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { withTrailingSlash } from "ufo";
import "./nuxt-link-DwSMCMKW.js";
import "./nuxt-img-DNe_xHrX.js";
import "defu";
import "h3";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "devalue";
import "destr";
import "klona";
import "ohash";
import "cookie-es";
import "rellax";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GalleriesList",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      default: "galleries"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data: _galleries } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "galleries",
      async () => await queryContent(withTrailingSlash(props.path)).find()
    )), __temp = await __temp, __restore(), __temp);
    const galleries = computed(() => _galleries.value || []);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_GalleryListItem = _sfc_main$1;
      if ((_a = unref(galleries)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(galleries), (gallery, index) => {
          _push(ssrRenderComponent(_component_GalleryListItem, {
            key: index,
            gallery
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><p class=""> No galleries found. </p></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/GalleriesList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=GalleriesList-qOeDAQsz.js.map
