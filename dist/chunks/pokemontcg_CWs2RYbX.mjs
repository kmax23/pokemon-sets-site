import fetch from 'node-fetch';

const API_KEY = "ae52bd98-3712-42b9-a7fa-8d1e03f2ff21";
const BASE = "https://api.pokemontcg.io/v2";
async function getJSON(url) {
  const res = await fetch(url, { headers: { "X-Api-Key": API_KEY } });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  return json.data;
}
async function fetchSets() {
  return await getJSON(`${BASE}/sets?pageSize=50`);
}
async function fetchSet(id) {
  return await getJSON(`${BASE}/sets/${id}`);
}
async function fetchCardsBySet(setId) {
  return await getJSON(`${BASE}/cards?q=set.id:${setId}&pageSize=250`);
}
async function fetchCard(id) {
  return await getJSON(`${BASE}/cards/${id}`);
}
async function fetchCards(limit = 20, page = 1) {
  const res = await fetch(`${BASE}/cards?pageSize=${limit}&page=${page}`, {
    headers: { "X-Api-Key": API_KEY }
  });
  const data = await res.json();
  return data.data;
}

export { fetchCardsBySet as a, fetchCards as b, fetchSet as c, fetchSets as d, fetchCard as f };
