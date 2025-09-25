import { L as Layout } from "./Layout-COrmwFcP.js";
import { I as Icon } from "./Dropdown-B4Shi6yC.js";
import { Head } from "@inertiajs/vue3";
import sanitizeHtml from "sanitize-html";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./LoadingButton-C_hDdjdK.js";
import "moment";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  components: {
    Icon,
    Head
  },
  props: {
    data: Object
  },
  data() {
    return {
      page: JSON.parse(this.data.html)
    };
  },
  methods: {
    sanitizeHtml
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Terms of services" }, null, _parent));
  _push(`<section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center"><h1 class="text-4xl font-semibold text-white">${ssrInterpolate($data.page.title)}</h1><p class="mt-2 text-base leading-7 text-white">Last updated on ${ssrInterpolate($props.data.updated_at)}</p></div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section><div class="relative"><div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900"><svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path></svg></div></div><section class="relative md:py-20 py-16"><div class="container"><div class="md:flex justify-center"><div class="md:w-full"><div class="p-6 bg-white rounded-md leading-7 html">${$options.sanitizeHtml($data.page.content) ?? ""}</div></div></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/TermsOfServices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TermsOfServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TermsOfServices as default
};
