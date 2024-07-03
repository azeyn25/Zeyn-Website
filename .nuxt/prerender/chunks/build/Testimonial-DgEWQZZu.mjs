import { defineComponent, useSSRContext } from 'file:///Users/abdullahzeyn/code/Zeyn-Website/node_modules/vue/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Testimonial",
  props: {
    quote: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    image: {
      type: Object,
      required: false
    }
  },
  setup(__props) {
    return () => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Testimonial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Testimonial-DgEWQZZu.mjs.map
