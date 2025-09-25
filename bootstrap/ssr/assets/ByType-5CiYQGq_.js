import { L as Layout } from "./Layout-COrmwFcP.js";
import { I as Icon } from "./Dropdown-B4Shi6yC.js";
import { Link } from "@inertiajs/vue3";
import { P as Pagination } from "./Pagination-D-H06zcq.js";
import { S as Subscribe } from "./Subscribe-DC9koxZD.js";
import moment from "moment";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./FlashMessages-BlPv0OK4.js";
import "./LoadingButton-C_hDdjdK.js";
import "axios";
import "@popperjs/core";
const _sfc_main = {
  layout: Layout,
  props: {
    posts: Object,
    type: Object
  },
  components: {
    Icon,
    Pagination,
    Subscribe,
    Link
  },
  created() {
    this.moment = moment;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]"><div class="container"><div class="-mx-4 flex flex-wrap items-center"><div class="w-full px-4"><div class="text-center">`);
  if ($props.type.name) {
    _push(`<h1 class="text-4xl font-semibold text-white">${ssrInterpolate($props.type.name)}</h1>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><div><span class="absolute top-0 left-0 z-[-1]"><img src="/landing/images/header/shape-1.svg" alt=""></span><span class="absolute top-0 right-0 z-[-1]"><img src="/landing/images/header/shape-2.svg" alt=""></span></div></section><section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20"><div class="container"><div class="-mx-4 flex flex-wrap"><!--[-->`);
  ssrRenderList($props.posts.data, (post) => {
    _push(`<div class="w-full px-4 md:w-1/2 lg:w-1/3"><div class="wow fadeInUp group mb-10" data-wow-delay=".1s"><div><span class="mb-5 inline-block rounded bg-primary py-1 px-4 text-center text-xs font-semibold leading-loose text-white">${ssrInterpolate(_ctx.moment(post.updated_at).format("MMM DD, YYYY"))}</span><h3>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("kb.details", post.id),
      class: "mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(post.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(post.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h3><p class="text-base text-body-color">${ssrInterpolate(post.details.length < 70 ? post.details : post.details.substring(0, 70) + "...")}</p></div></div></div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.posts.links
  }, null, _parent));
  _push(`</div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/KnowledgeBase/ByType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ByType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ByType as default
};
