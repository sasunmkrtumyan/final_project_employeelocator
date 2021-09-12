import { firestore } from "../helpers/libs/firebase.libs";

var docRef = firestore.collection("users");

export const addUser = ({ email, password, uid }) => {
  return firestore.collection("users").doc(uid).set({
    email,
    password,
    uid,
  });
};

export const updateProfile = ({ uid, ...userData }) => {
  return firestore.collection("users").doc(uid).update(userData);
};

export const getUser = async (uid) => {
  const doc = await docRef.doc(uid).get();

  try {
    if (doc.exists) {
      return doc.data();
    } else {
      console.log("No such document!");
    }
  } catch (e) {
    console.log(e);
  }
};
