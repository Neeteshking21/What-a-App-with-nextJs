// Import the functions you need from the SDKs you need
import { initializeApp, apps, app } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPq9UoELLzm4L79Ml9vNT6C44JJDAYQm8",
  authDomain: "what-s-app-clone-with-next-js.firebaseapp.com",
  projectId: "what-s-app-clone-with-next-js",
  storageBucket: "what-s-app-clone-with-next-js.appspot.com",
  messagingSenderId: "704197516291",
  appId: "1:704197516291:web:bc467638d662721cb20236",
  measurementId: "G-G5H4TTFFJ0"
};

// Initialize Firebase
const auth = getAuth(firebaseConfig)
onAuthStateChanged(auth, (user)=>{
    if(user) console.log("User Logged in")
    else console.log("No user Logged in")
})
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


const storage = getStorage(db, "gs://my-custom-bucket");

export { auth }