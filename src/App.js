import React, { useEffect } from "react";
import Homescreen from "./pages/Homescreen";
import "./App.scss";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginSecreen from "./pages/LoginSecreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";
import ProfileScreen from "./pages/ProfileScreen";

const App = () => {
  //for firing an action
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  //for handling the sign in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <LoginSecreen />
        ) : (
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/login" element={<LoginSecreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
