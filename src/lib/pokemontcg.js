import fetch from 'node-fetch';

const API_KEY = import.meta.env.POKEMON_TCG_API_KEY;
const BASE = 'https://api.pokemontcg.io/v2';

if (!API_KEY) {
  throw new Error('POKEMON_TCG_API_KEY environment variable is missing!');
}

async function getJSON(url) {
  const res = await fetch(url, { headers: { 'X-Api-Key': API_KEY } });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  return json.data;
}

export async function fetchSets() {
  return await getJSON(`${BASE}/sets?pageSize=50`);
}

export async function fetchSet(id) {
  return await getJSON(`${BASE}/sets/${id}`);
}

export async function fetchCardsBySet(setId) {
  return await getJSON(`${BASE}/cards?q=set.id:${setId}&pageSize=250`);
}

export async function fetchCard(id) {
  return await getJSON(`${BASE}/cards/${id}`);
}
