import React, { useState } from "react";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const [current, setCurrent] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{current}</h2>
          <i class="fa-solid fa-xmark" onClick={() => setShowLogin(false)}></i>
        </div>
        <div className="login-popup-input">
          {current === "Login" ? (
            <></>
          ) : (
            <input name="name" type="text" placeholder="Your name" />
          )}

          <input name="email" type="email" placeholder="Your email" />
          <input name="password" type="password" placeholder="Your password" />
        </div>
        <button type="submit">
          {current === "Sign Up" ? "Create account" : "Login"}
        </button>
        {current === "Login" ? (
          <p>
            Create new account
            <span onClick={() => setCurrent("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have a account?
            <span onClick={() => setCurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
