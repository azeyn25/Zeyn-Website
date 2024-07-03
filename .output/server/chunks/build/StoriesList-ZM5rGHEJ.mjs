import _sfc_main$1 from './StoryListItem-Dlbm_Ihl.mjs';
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
  __name: "StoriesList",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      default: "stories"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data: _stories } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "stories",
      async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const stories = computed(() => _stories.value || []);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_StoryListItem = _sfc_main$1;
      if ((_a = unref(stories)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(stories), (story) => {
          _push(ssrRenderComponent(_component_StoryListItem, {
            key: story._path,
            story
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><p class="">No Stories found.</p></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/StoriesList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=StoriesList-ZM5rGHEJ.mjs.map
