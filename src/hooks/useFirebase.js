import React, { useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initAuth from "../components/Firebase/firebase.init";
import { useState } from "react";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [isLodaing, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   Google Sign In
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   Observer

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //   Log Out

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    isLodaing,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
