import React from "react";
import AppRouter from "elements/Router";
import { useState } from "react";
import {authService} from "fbase";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(authService.currentUser);
  return <>
  <AppRouter isloggedIn={isLoggedIn} />
  <footer>&copy;{new Date().getFullYear()} Nwitter By SSSALT</footer>
  </>;
}

export default App;