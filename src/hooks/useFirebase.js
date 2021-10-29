import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initAuth from "../components/Firebase/firebase.init";
import { useState } from "react";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState([]);

  //   Google Sign In

  return <div></div>;
};

export default useFirebase;
