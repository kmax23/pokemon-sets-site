import { c as createComponent, e as renderHead, f as renderSlot, b as renderTemplate } from './astro/server_BYDeMHiw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Pokemon TCG Tracker</title><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> <body class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/dcald/Documents/pokemon-sets-site/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
