import _sfc_main$1 from './GalleryListItem-Nmq3QWpB.mjs';
import { u as useAsyncData } from './asyncData-0Ivy9NBH.mjs';
import { q as queryContent } from './server.mjs';
import { defineComponent, withAsyncContext, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { I as withTrailingSlash } from '../runtime.mjs';
import './nuxt-link-DwSMCMKW.mjs';
import './nuxt-img-DNe_xHrX.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'rellax';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'consola/core';
import 'ipx';

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

export { _sfc_main as default };
//# sourceMappingURL=GalleriesList-qOeDAQsz.mjs.map
