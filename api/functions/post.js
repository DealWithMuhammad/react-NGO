// "use server";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  deleteDoc,
  updateDoc as firestoreUpdateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../FirebaseConfig";

const db = getFirestore(app);
const storage = getStorage(app);

async function postDoc(data, collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);

    const url = await storeImageInFirestore(data.imageUrl);
    console.log(url);

    const updatedData = {
      id: docRef.id,
      imageUrl: url,
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
async function storeImageInFirestore(imageUrl) {
  try {
    // Fetch the image blob from the URL
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Create a reference to the Firebase Storage location where the image will be stored
    const imageName = `images/${Date.now()}`;
    const storageRef = ref(storage, imageName); // Initialize the storage reference correctly

    // Upload the blob to Firebase Storage
    await uploadBytes(storageRef, blob); // Use uploadBytes() to upload the blob

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRef);

    // Ensure the imageUrl is defined
    if (downloadURL) {
      // Store the download URL in Firestore
      const success = await postDoc({ imageUrl: downloadURL }, "images");

      if (success) {
        console.log("Image stored in Firestore successfully.");
        return downloadURL; // Return the download URL
      } else {
        console.log("Failed to store image in Firestore.");
        return null;
      }
    } else {
      console.log("Download URL for the image is undefined.");
      return null;
    }
  } catch (error) {
    console.error("Error storing image in Firestore:", error);
    return null;
  }
}

export { updateDoc, postDoc, deleteDocument };
