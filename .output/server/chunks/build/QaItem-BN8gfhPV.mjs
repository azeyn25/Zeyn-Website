import { defineComponent, unref, mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QaItem",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Disclosure), mergeProps({
        as: "div",
        class: "pt-6"
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<dt${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-200" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="text-base font-semibold leading-7"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "question", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</span>`);
                } else {
                  return [
                    createVNode("span", { class: "text-base font-semibold leading-7" }, [
                      renderSlot(_ctx.$slots, "question")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</dt>`);
            _push2(ssrRenderComponent(unref(DisclosurePanel), {
              as: "dd",
              class: "mt-2 pr-12"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-base leading-7 text-zinc-600 dark:text-zinc-500"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "answer", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-base leading-7 text-zinc-600 dark:text-zinc-500" }, [
                      renderSlot(_ctx.$slots, "answer")
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("dt", null, [
                createVNode(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left text-zinc-900 dark:text-zinc-200" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-base font-semibold leading-7" }, [
                      renderSlot(_ctx.$slots, "question")
                    ])
                  ]),
                  _: 3
                })
              ]),
              createVNode(unref(DisclosurePanel), {
                as: "dd",
                class: "mt-2 pr-12"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text-base leading-7 text-zinc-600 dark:text-zinc-500" }, [
                    renderSlot(_ctx.$slots, "answer")
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/QaItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=QaItem-BN8gfhPV.mjs.map
