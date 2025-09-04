import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_1lcv4XBJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://api.pokemontcg.io/v2/sets", {
    headers: {
      "X-Api-Key": undefined                                  
    }
  });
  const data = await response.json();
  const sets = data.data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Pokémon TCG Sets" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-6"> <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Pokémon TCG Sets</h1> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${sets.map((set) => renderTemplate`<a${addAttribute(`/sets/${set.id}`, "href")} class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden"> <img${addAttribute(set.images.logo, "src")}${addAttribute(set.name, "alt")} class="w-full h-32 object-contain bg-gray-100 p-2"> <div class="p-2"> <h2 class="text-lg font-semibold truncate">${set.name}</h2> <p class="text-sm text-gray-500">${set.releaseDate}</p> </div> </a>`)} </div> </div> ` })}`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/index.astro", void 0);
const $$file = "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
