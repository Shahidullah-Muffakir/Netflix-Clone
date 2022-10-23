import React, { useRef } from "react";
import "./SignUp.scss";
import {
  createUserWithWithEmailAndPassword,
  loginInWithEmailAndPassword,
} from "../firebase";
import { current } from "@reduxjs/toolkit";
const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  const handleSingIn = (e) => {
    e.preventDefault(e);
    loginInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    );
  };
  return (
    <div className="signUp">
      <h1>Sign In</h1>
      <form className="signUp__form">
        <input ref={emailRef} type="email" placeholder="Enter Email" />
        <input ref={passwordRef} type="password" placeholder="Enter Password" />
        <button type="submit" onClick={handleSingIn}>
          Sign In
        </button>
        <p id="notMemberAndSignUp">
          {" "}
          <span className="notMember">Not a memeber already?</span>
          <span className="signUpButton" onClick={handleSignUp}>
            Sign UP
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
