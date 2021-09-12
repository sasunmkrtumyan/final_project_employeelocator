import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

export default firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  appID: process.env.REACT_APP_APP_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   databaseURL: process.env.REACT_APP_DB_URL,
});

export const db = firebase.database();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
