import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYc1UtTb60CloVr2rvyqGIBpbEFaMALTU",
  authDomain: "e-learn-dae17.firebaseapp.com",
  projectId: "e-learn-dae17",
  storageBucket: "e-learn-dae17.appspot.com",
  messagingSenderId: "244773648730",
  appId: "1:244773648730:web:ad26a7a104c2a90718db63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
