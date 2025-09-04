import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_1lcv4XBJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Disclosure = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Disclosure", "description": "Affiliate and monetization disclosure" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto space-y-6"> <h1 class="text-3xl font-bold">Affiliate & Monetization Disclosure</h1> <p class="text-gray-700">
This website may contain affiliate links to online retailers, such as
<strong>Amazon</strong>, <strong>eBay</strong>, and <strong>TCGplayer</strong>.
      If you click on a link and make a purchase, we may earn a small commission
      at no additional cost to you.
</p> <p class="text-gray-700">
These commissions help us keep the site online, improve content, and
      continue building tools for Pokémon collectors.
</p> <p class="text-gray-700">
We are not directly affiliated with The Pokémon Company, Nintendo,
      Game Freak, or Creatures Inc. This is a fan-made project.
</p> </div> ` })}`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/disclosure.astro", void 0);

const $$file = "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/disclosure.astro";
const $$url = "/disclosure";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclosure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
