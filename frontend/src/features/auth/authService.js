import { async } from "@firebase/util";
// import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../Firebase";

const provider = new GoogleAuthProvider();

//createAccount//

const createAccount = async (userData) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    user.displayName = userData.name;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

//sign in google

const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);
    console.log("sfbs", user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    return user;
  } catch (err) {
    console.log(err);
  }
  // //   signInWithPopup(auth, provider)
  // //     .then(({ user }) => {
  // //       console.log("sign in google", user);
  // //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return user;
};

const authService = {
  createAccount,
  signInWithGoogle,
};

export default authService;
