import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_1lcv4XBJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About", "description": "About this Pok\xE9mon card site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto space-y-6"> <h1 class="text-3xl font-bold">About This Site</h1> <p class="text-gray-700">
Welcome to our Pokémon TCG site! This project is designed to help collectors
      and fans explore different Pokémon sets, browse cards, and find where to buy them.
</p> <p class="text-gray-700">
Right now the data is hardcoded, but the goal is to eventually provide
      real-time info about card values, availability, and more. Stay tuned
      as we continue to improve!
</p> <p class="text-gray-700">
Built with <span class="font-semibold">Astro</span> + <span class="font-semibold">Tailwind CSS</span>.
</p> </div> ` })}`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/about.astro", void 0);

const $$file = "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
