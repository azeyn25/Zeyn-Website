import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AwardsItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    year: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "dark:text-zinc-400 flex flex-col gap-1" }, _attrs))}><p class="flex items-baseline gap-2"><span class="font-display text-2xl text-zinc-500 dark:text-zinc-500">${ssrInterpolate(__props.year)}</span><span><strong class="font-semibold dark:text-zinc-200">${ssrInterpolate(__props.title)}</strong></span></p><span class="text-sm">${ssrInterpolate(__props.description)}</span></li>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/AwardsItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AwardsItem-C7RKbt86.mjs.map
