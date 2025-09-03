// scripts/seed.js
// Usage (local dev):
//   Set GOOGLE_APPLICATION_CREDENTIALS to the downloaded JSON path, then `node scripts/seed.js`
// Or set FIREBASE_SERVICE_ACCOUNT_JSON to the full JSON string.

import admin from "firebase-admin";
import fs from "fs";

// Initialize admin either from env var JSON or from GOOGLE_APPLICATION_CREDENTIALS file
let serviceAccount;
if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
} else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  serviceAccount = JSON.parse(fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, "utf8"));
} else {
  console.error("Set FIREBASE_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS.");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seed() {
  const tcgDoc = db.collection("tcgs").doc("pokemon");
  await tcgDoc.set({
    name: "Pokémon TCG",
    abbreviation: "pokemon",
    publisher: "Nintendo/Creatures/Game Freak",
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  // Example: Base set
  const baseSet = {
    id: "base-set",
    name: "Base Set",
    code: "base1",
    releaseDate: "1999-01-09",
    totalCards: 102,
    summary: "The original English Pokémon TCG release."
  };

  // Write set doc under tcgs/pokemon/sets/{id}
  await tcgDoc.collection("sets").doc(baseSet.id).set(baseSet);

  // Example cards for the set
  const cards = [
    {
      slug: "charizard-base-4",
      name: "Charizard",
      number: "4",
      rarity: "Holo Rare",
      setId: baseSet.id,
      setName: baseSet.name,
      imageUrl: "https://via.placeholder.com/400x600?text=Charizard"
    },
    {
      slug: "blastoise-base-2",
      name: "Blastoise",
      number: "2",
      rarity: "Holo Rare",
      setId: baseSet.id,
      setName: baseSet.name,
      imageUrl: "https://via.placeholder.com/400x600?text=Blastoise"
    },
    {
      slug: "venusaur-base-15",
      name: "Venusaur",
      number: "15",
      rarity: "Holo Rare",
      setId: baseSet.id,
      setName: baseSet.name,
      imageUrl: "https://via.placeholder.com/400x600?text=Venusaur"
    }
  ];

  // Write both under set subcollection AND in top-level `cards` collection for fast lookup
  for (const c of cards) {
    await tcgDoc.collection("sets").doc(baseSet.id).collection("cards").doc(c.slug).set(c);
    await db.collection("cards").doc(c.slug).set(c);
  }

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
