import { h as useRuntimeConfig } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/h3/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/devalue/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/ufo/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/destr/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/klona/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/scule/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/defu/dist/defu.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/ohash/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/pathe/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unified/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/micromark-util-character/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/remark-emoji/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/rehype-slug/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/rehype-external-links/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/remark-gfm/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/rehype-raw/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/remark-parse/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/remark-rehype/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/detab/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unist-builder/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/mdurl/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/slugify/slugify.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unist-util-position/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unist-util-visit/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/ipx/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unhead/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unctx/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/rellax/rellax.js';

const heading = 1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH1",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const { anchorLinks } = useRuntimeConfig().public.content;
    const generate = (anchorLinks == null ? void 0 : anchorLinks.depth) >= heading && !(anchorLinks == null ? void 0 : anchorLinks.exclude.includes(heading));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({ id: _ctx.id }, _attrs))}>`);
      if (_ctx.id && unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${_ctx.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h1>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH1-CuTafI43.mjs.map
