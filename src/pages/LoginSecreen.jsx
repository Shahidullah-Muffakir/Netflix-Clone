import React, { useState } from "react";
import SignUp from "../components/SignUp";
import "./LoginScreen.scss";

const LoginSecreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div
      className="loginScreen"
      style={{
        backgroundImage:
          'url("https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        top: "0",
      }}
    >
      <div className="loginScreen__nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
      {showLogin ? (
        <SignUp />
      ) : (
        <div className="loginScreen__body">
          <h1>Unlimited films, TV programmes and more.</h1>
          <p>Watch anywhere. Cancel at any time</p>
          <p>
            REad to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="inputAndButton">
            <form>
              <input type="email" placeholder="Enter Email" />
              <button onClick={() => setShowLogin(true)}>GET STARTED</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginSecreen;
