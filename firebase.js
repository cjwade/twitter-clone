// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB5EsFcH82tf-DoiozfZDOLbP4seLknOAQ",
	authDomain: "twitter-clone-21818.firebaseapp.com",
	projectId: "twitter-clone-21818",
	storageBucket: "twitter-clone-21818.appspot.com",
	messagingSenderId: "684923763672",
	appId: "1:684923763672:web:524e27fe4f0019b40490ad",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
