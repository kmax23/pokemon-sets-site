import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_1lcv4XBJ.mjs';
import { d as fetchSets } from '../chunks/pokemontcg_CWs2RYbX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const sets = await fetchSets();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pok\xE9mon TCG Sets" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-6"> <h1 class="text-4xl font-bold mb-6">Pokémon TCG Sets</h1> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${sets.map((set) => renderTemplate`<a${addAttribute(`/sets/${set.id}`, "href")} class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"> <div class="p-4"> <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">${set.name}</h2> <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">${set.series}</p> <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Cards: ${set.total}</p> </div> </a>`)} </div> </div> ` })}`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/sets/index.astro", void 0);

const $$file = "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/sets/index.astro";
const $$url = "/sets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
