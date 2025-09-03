// src/lib/firestore.server.js
import admin from "firebase-admin";

function initAdmin() {
  if (admin.apps.length) return admin.firestore();

  let serviceAccount;
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
    serviceAccount = {
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      client_email: process.env.FIREBASE_CLIENT_EMAIL
    };
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    // Let google SDK pick it up automatically
    // admin.initializeApp() without credential will use ADC if the env var is set
    admin.initializeApp();
    return admin.firestore();
  } else {
    throw new Error("No Firebase credentials found. Set FIREBASE_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS or FIREBASE_* env vars.");
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  return admin.firestore();
}

const db = initAdmin();

export async function getAllSets() {
  const snap = await db.collection("tcgs").doc("pokemon").collection("sets").get();
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getSetById(setId) {
  const doc = await db.collection("tcgs").doc("pokemon").collection("sets").doc(setId).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}

export async function getCardsBySet(setId) {
  const snap = await db.collection("tcgs").doc("pokemon").collection("sets").doc(setId).collection("cards").get();
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getAllCards() {
  const snap = await db.collection("cards").get();
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getCardBySlug(slug) {
  const doc = await db.collection("cards").doc(slug).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
}
