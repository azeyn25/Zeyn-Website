import { defineComponent, toRaw, h, resolveComponent, Text, useSSRContext } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue/index.mjs';
import destr from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/destr/dist/index.mjs';
import { pascalCase } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/scule/dist/index.mjs';
import { find, html } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/property-information/index.js';
import { h as useRuntimeConfig, i as useContentPreview, b as useRoute } from './server.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/h3/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/devalue/index.js';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/ufo/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/hookable/dist/index.mjs';
import 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/klona/dist/index.mjs';
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

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const _sfc_main = defineComponent({
  name: "ContentRendererMarkdown",
  props: {
    /**
     * Content to render
     */
    value: {
      type: Object,
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    }
  },
  async setup(props) {
    var _a, _b, _c;
    const { content: { tags = {} } } = useRuntimeConfig().public;
    const debug = useContentPreview().isEnabled();
    let body = ((_a = props.value) == null ? void 0 : _a.body) || props.value;
    if (props.excerpt && ((_b = props.value) == null ? void 0 : _b.excerpt)) {
      body = props.value.excerpt;
    }
    if (body) {
      await resolveContentComponents(body, {
        tags: {
          ...tags,
          ...toRaw(((_c = props.value) == null ? void 0 : _c._components) || {}),
          ...props.components
        }
      });
    }
    return { debug, tags };
  },
  render(ctx) {
    var _a;
    const { tags, tag, value, excerpt, components, debug } = ctx;
    if (!value) {
      return null;
    }
    let body = (value == null ? void 0 : value.body) || value;
    if (excerpt && (value == null ? void 0 : value.excerpt)) {
      body = value.excerpt;
    }
    const meta = {
      ...value,
      tags: {
        ...tags,
        ...toRaw((value == null ? void 0 : value._components) || {}),
        ...components
      }
    };
    let component = meta.component || tag;
    if (typeof meta.component === "object") {
      component = meta.component.name;
    }
    component = resolveVueComponent(component);
    return h(
      component,
      {
        ...(_a = meta.component) == null ? void 0 : _a.props,
        ...this.$attrs,
        "data-content-id": debug ? value._id : void 0
      },
      renderSlots(body, h, meta, meta)
    );
  }
});
function renderNode(node, h2, documentMeta, parentScope = {}) {
  var _a;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  if (node.tag === "script") {
    return h2(Text, renderToText(node));
  }
  const originalTag = node.tag;
  const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[originalTag] || originalTag;
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  return h2(
    component,
    props,
    renderSlots(node, h2, documentMeta, { ...parentScope, ...props })
  );
}
function renderToText(node) {
  var _a, _b;
  if (node.type === "text") {
    return node.value;
  }
  if (!((_a = node.children) == null ? void 0 : _a.length)) {
    return `<${node.tag}>`;
  }
  return `<${node.tag}>${((_b = node.children) == null ? void 0 : _b.map(renderToText).join("")) || ""}</${node.tag}>`;
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a;
  const data = {
    ...parentScope,
    $route: () => useRoute(),
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? void 0 : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return {};
  }, data);
  return h2(Text, value);
}
function renderSlots(node, h2, documentMeta, parentProps) {
  const children = node.children || [];
  const slotNodes = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(node2);
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = data[slotName] || [];
    data[slotName].push(...node2.children || []);
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  const slots = Object.entries(slotNodes).reduce((slots2, [name, children2]) => {
    if (!children2.length) {
      return slots2;
    }
    slots2[name] = () => {
      const vNodes = children2.map((child) => renderNode(child, h2, documentMeta, parentProps));
      return mergeTextNodes(vNodes);
    };
    return slots2;
  }, {});
  return slots;
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!htmlTags.includes(component) && !(component == null ? void 0 : component.render)) {
    const componentFn = resolveComponent(pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? void 0 : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
    if (c == null ? void 0 : c.render) {
      return;
    }
    const resolvedComponent = resolveComponent(c);
    if ((resolvedComponent == null ? void 0 : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    var _a;
    if (node.type === "text" || node.tag === "binding") {
      return [];
    }
    const renderTag = typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) === "undefined" && documentMeta.tags[node.tag] || node.tag;
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentRendererMarkdown-TaQqGoIg.mjs.map
