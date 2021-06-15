import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh1I3bD8X-oM46pyV0d3CUksdd5mwThKE",
  authDomain: "facebook-toluade.firebaseapp.com",
  projectId: "facebook-toluade",
  storageBucket: "facebook-toluade.appspot.com",
  messagingSenderId: "124164505703",
  appId: "1:124164505703:web:babe70c218d5e3288294c2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
