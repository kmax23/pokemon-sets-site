import fetch from 'node-fetch';

const API_KEY = import.meta.env.POKEMON_TCG_API_KEY;
const BASE = 'https://api.pokemontcg.io/v2';

async function safeFetch(url) {
  try {
    const res = await fetch('${BASE}', {
      headers: { 'X-Api-Key': API_KEY }
    });
    if (!res.ok) {
      console.error(`Failed request: ${url} (status ${res.status})`);
      return { data: [] };
    }
    return await res.json();
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return { data: [] };
  }
}

export async function fetchSets() {
  const data = await safeFetch(`${BASE}/sets?pageSize=50`);
  return data.data || [];
}

export async function fetchSet(id) {
  const data = await safeFetch(`${BASE}/sets/${id}`);
  return data.data || null;
}

export async function fetchCardsBySet(setId) {
  const data = await safeFetch(`${BASE}/cards?q=${setId}&pageSize=250`);
  return data.data || [];
}

export async function fetchCard(id) {
  const data = await safeFetch(`${BASE}/cards/${id}`);
  return data.data || null;
}

export async function fetchCards(limit = 20) {
  const res = await fetch(`${BASE}/cards?pageSize=${limit}`, {
    headers: { 'X-Api-Key': API_KEY }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch cards: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.data;
}