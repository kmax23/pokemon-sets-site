import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_1lcv4XBJ.mjs';
import { c as fetchSet, a as fetchCardsBySet, d as fetchSets } from '../../chunks/pokemontcg_CWs2RYbX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const sets = await fetchSets();
  if (!sets || !Array.isArray(sets)) {
    throw new Error("No sets returned from the API. Check your API key.");
  }
  return sets.map((set) => ({ params: { slug: set.id } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let set, cards;
  try {
    set = await fetchSet(slug);
    cards = await fetchCardsBySet(slug);
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch set or cards for slug: ${slug}`);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": set.name }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-6"> <h1 class="text-4xl font-bold mb-4">${set.name}</h1> <p class="text-gray-500 mb-2">${set.series}</p> <p class="text-gray-500 mb-2">Total Cards: ${set.total}</p> <p class="text-gray-500 mb-4">Release Date: ${set.releaseDate}</p> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"> ${cards.map((card) => renderTemplate`<a${addAttribute(`/cards/${card.id}`, "href")} class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"> <img${addAttribute(card.images.small, "src")}${addAttribute(card.name, "alt")} class="w-full h-48 object-cover"> <div class="p-2"> <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">${card.name}</h2> <p class="text-gray-500 dark:text-gray-400 text-sm">${card.rarity || "Unknown"}</p> </div> </a>`)} </div> <div class="mt-6"> <a href="/sets" class="text-blue-500 hover:underline">&larr; Back to all sets</a> </div> </div> ` })}`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/sets/[slug].astro", void 0);

const $$file = "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/sets/[slug].astro";
const $$url = "/sets/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
