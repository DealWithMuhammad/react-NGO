"use server";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  deleteDoc,
  updateDoc as firestoreUpdateDoc,
} from "firebase/firestore";
import { app } from "../FirebaseConfig";

const db = getFirestore(app);

async function postDoc(data, collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    const updatedData = {
      id: docRef.id,
    };
    await updateDoc(collectionName, docRef.id, updatedData);
    console.log(`Posted Successfully`);
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

async function updateDoc(collectionName, docId, data) {
  try {
    const docRef = doc(db, collectionName, docId);
    await firestoreUpdateDoc(docRef, data);
    console.log(`Updated Successfully`);
    return true;
  } catch (error) {
    console.log(error);
  }
}

async function deleteDocument(collectionName, docId) {
  try {
    const collectionRef = doc(db, collectionName, docId);
    await deleteDoc(collectionRef);
    return true;
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}
export { updateDoc, postDoc, deleteDocument };
