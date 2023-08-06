import React, { useEffect } from "react";
import AppRouter from "elements/Router";
import { useState } from "react";
import {authService} from "fbase";
import { auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  useEffect ( () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsloggedIn(true);
          const uid = user.uid;
        } else {
          setIsloggedIn(false);
        }
        setInit(true);
      });
    
  }, []);

  const onLogOutClick = () => {
    authService.signOut();
    if (authService.currentUser) {alert("Log out : " + authService.currentUser.email)} else {alert("Already outted")};
  };


  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy;{new Date().getFullYear()} Nwitter</footer>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
}

export default App;