import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_1lcv4XBJ.mjs';
import { f as fetchCard, a as fetchCardsBySet } from '../../chunks/pokemontcg_CWs2RYbX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const setId = "base1";
  const cards = await fetchCardsBySet(setId);
  const limited = cards.slice(0, 50);
  return limited.map((card) => ({ params: { slug: card.id }, props: { card } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let card;
  try {
    card = await fetchCard(slug);
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to fetch card for slug: ${slug}`);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": card.name }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto p-6"> <h1 class="text-4xl font-bold mb-4">${card.name}</h1> <img${addAttribute(card.images.small, "src")}${addAttribute(card.name, "alt")} class="w-full rounded-lg mb-4"> <p class="mb-2"><strong>Set:</strong> ${card.set.name}</p> <p class="mb-2"><strong>Rarity:</strong> ${card.rarity || "Unknown"}</p> <p class="mb-2"><strong>Type:</strong> ${card.types?.join(", ") || "Unknown"}</p> <p class="mb-2"><strong>HP:</strong> ${card.hp || "Unknown"}</p> <div class="mt-6"> <a${addAttribute(`/sets/${card.set.id}`, "href")} class="text-blue-500 hover:underline">&larr; Back to ${card.set.name}</a> </div> </div> ` })}`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/cards/[slug].astro", void 0);

const $$file = "C:/Users/dcald/Documents/pokemon-sets-site/src/pages/cards/[slug].astro";
const $$url = "/cards/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
