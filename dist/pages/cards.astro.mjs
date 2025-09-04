import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_1lcv4XBJ.mjs';
import { b as fetchCards } from '../chunks/pokemontcg_CWs2RYbX.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const cards = await fetchCards(20);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "All Pok\xE9mon Cards" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-6"> <h1 class="text-4xl font-bold mb-6">Pokémon Cards</h1> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${cards.map((card) => renderTemplate`<a${addAttribute(`/cards/${card.id}`, "href")} class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"> <img${addAttribute(card.images.small, "src")}${addAttribute(card.name, "alt")} class="w-full h-48 object-cover"> <div class="p-2"> <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">${card.name}</h2> <p class="text-gray-500 dark:text-gray-400 text-sm">${card.rarity || "Unknown"}</p> </div> </a>`)} </div> </div> ` })}`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/cards/index.astro", void 0);

const $$file = "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/cards/index.astro";
const $$url = "/cards";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
