import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
const Nav = () => {
  const [show, setShow] = useState(false);

  //we can acess the navigation object of the router means we can acess all the routes
  const navigate = useNavigate();
  //function to be executed while scrolling the window.
  const transitioinNavBar = () => {
    if (window.scrollY > 100) {
      //means why scoll more then the normal screen
      setShow(true); //when show state is true, nav-black classname will be used.
    } else {
      setShow(false);
    }
  };

  //everytime screen refresh on the window scrol we will listen to transitionNavbar function.
  useEffect(() => {
    window.addEventListener("scroll", transitioinNavBar);
    return () => window.removeEventListener("scroll", transitioinNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
