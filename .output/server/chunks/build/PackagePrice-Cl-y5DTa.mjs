import { _ as __nuxt_component_1 } from './nuxt-img-DNe_xHrX.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
import '../runtime.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'rellax';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PackagePrice",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: { default: "" },
    includedFeatures: {},
    price: {},
    currency: { default: "USD" },
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose" }, _attrs))}><div class="mx-auto max-w-2xl rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-50/5 lg:mx-0 lg:flex lg:max-w-none lg:items-stretch"><div class="p-8 sm:p-10 lg:flex-auto"><h3 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">${ssrInterpolate(_ctx.title)}</h3>`);
      if (_ctx.description) {
        _push(`<p class="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-500">${ssrInterpolate(_ctx.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400"><!--[-->`);
      ssrRenderList(_ctx.includedFeatures, (feature) => {
        _push(`<li class="flex gap-x-2">${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul><div class="flex justify-center mt-8"><a href="mailto:info@abdullahzeyn.com"><button style="${ssrRenderStyle({ "background-color": "#4C004C", "color": "white", "font-weight": "bold", "padding": "0.5rem 1rem", "border-radius": "0.25rem" })}">Contact Me</button></a></div></div><div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0"><div class="relative overflow-hidden rounded-2xl py-10 text-center ring-1 ring-inset ring-zinc-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 lg:h-full bg-zinc-200 dark:bg-zinc-800">`);
      if (_ctx.image) {
        _push(`<div class="absolute inset-0">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: _ctx.image.src,
          alt: _ctx.image.alt,
          width: _ctx.image.width,
          height: _ctx.image.height,
          class: "photo w-full h-full object-cover"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mx-auto max-w-xs px-8 z-10"><p class="flex items-baseline justify-center gap-x-2"></p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PackagePrice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PackagePrice-Cl-y5DTa.mjs.map
