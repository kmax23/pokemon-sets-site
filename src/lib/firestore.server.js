// src/lib/firestore.server.js
import admin from 'firebase-admin';
import serviceAccount from '../../pokemon-sets-site-firebase-adminsdk-fbsvc-334d51d0b5.json' assert { type: 'json' };

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const db = admin.firestore();
