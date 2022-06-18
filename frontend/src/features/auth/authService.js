// import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
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

//sign in with email and password

const signInWithEmailandPassword = async (userData) => {
  console.log(userData);
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    console.log(user, "from service");
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

//sign in google

const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, provider);
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

//LOGOUT USER

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("course");
};

const authService = {
  createAccount,
  signInWithGoogle,
  logout,
  signInWithEmailandPassword,
};

export default authService;
