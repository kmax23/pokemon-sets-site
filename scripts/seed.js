import { db, admin } from '../src/lib/firebase.js';

async function seed() {
  const tcgDoc = db.collection('tcgs').doc('pokemon');
  await tcgDoc.set({
    name: 'Pokémon TCG',
    abbreviation: 'pokemon',
    publisher: 'Nintendo/Creatures/Game Freak',
    createdAt: admin.firestore.FieldValue.serverTimestamp(), // <-- admin needed here
  });

  const baseSet = {
    id: 'base-set',
    name: 'Base Set',
    code: 'base1',
    releaseDate: '1999-01-09',
    totalCards: 102,
    summary: 'The original English Pokémon TCG release.',
  };

  await tcgDoc.collection('sets').doc(baseSet.id).set(baseSet);

  const cards = [
    { slug: 'charizard-base-4', name: 'Charizard', number: '4', rarity: 'Holo Rare', setId: baseSet.id, setName: baseSet.name, imageUrl: 'https://via.placeholder.com/400x600?text=Charizard' },
    { slug: 'blastoise-base-2', name: 'Blastoise', number: '2', rarity: 'Holo Rare', setId: baseSet.id, setName: baseSet.name, imageUrl: 'https://via.placeholder.com/400x600?text=Blastoise' },
    { slug: 'venusaur-base-15', name: 'Venusaur', number: '15', rarity: 'Holo Rare', setId: baseSet.id, setName: baseSet.name, imageUrl: 'https://via.placeholder.com/400x600?text=Venusaur' }
  ];

  for (const c of cards) {
    await tcgDoc.collection('sets').doc(baseSet.id).collection('cards').doc(c.slug).set(c);
    await db.collection('cards').doc(c.slug).set(c);
  }

  console.log('Seed complete.');
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
