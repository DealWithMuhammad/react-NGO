"use server";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../FirebaseConfig";
const db = getFirestore(app);

async function getDocById(docId, collectionName) {
  const docRef = doc(db, collectionName, docId);
  try {
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      console.log("Doc not found.");
      return null;
    }
    return docSnapshot.data();
  } catch (error) {
    console.log("Error fetching Doc:", error);
  }
}

async function getBlogs() {
  try {
    const q = collection(db, "blogs");
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => doc.data());
    console.log(documents);
    return documents;
  } catch (error) {
    console.log("Something Went Wrong fetching");
    return false;
  }
}

async function getInbox() {
  try {
    const q = collection(db, "inbox");
    const querySnapshot = await getDocs(q);
    const documents = querySnapshot.docs.map((doc) => doc.data());
    console.log(documents);
    return documents;
  } catch (error) {
    console.log("Something Went Wrong fetching");
    return false;
  }
}

export { getDocById, getBlogs, getInbox };
