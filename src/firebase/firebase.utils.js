import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNcnogqq9ybLAWKUXlaqA5ZzfESdp2OHQ",
  authDomain: "supersecretpage-115b9.firebaseapp.com",
  databaseURL: "https://supersecretpage-115b9.firebaseio.com",
  projectId: "supersecretpage-115b9",
  storageBucket: "supersecretpage-115b9.appspot.com",
  messagingSenderId: "822748743827",
  appId: "1:822748743827:web:fcaa373359820b9284a566",
  measurementId: "G-S89HT04NDM",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
