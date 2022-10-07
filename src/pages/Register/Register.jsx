import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);

  return (
    <div className="register__wrapper">
      <div className="register">
        <div className="register__top">
          <div className="register__header">
            <div className="register__logo">
              <img
                src="/assets/logo-gif.gif"
                alt="Logo"
                className="register__logoGif"
              />
            </div>

            <div className="register__headerCenter">
              <span>{showLoginPage ? "Login" : "Create Account"}</span>
            </div>
          </div>

          <div className="register__signOptions">
            <button className="register__signOption register__facebook">
              <img src="assets/facebook.png" alt="facebook" /> Continue with
              Facebook
            </button>

            <button className="register__signOption register__twitter">
              <img src="assets/twitter.png" alt="twitter" /> Continue with
              Twitter
            </button>

            <button className="register__signOption register__google">
              <img src="assets/google.png" alt="google" />
              Continue with Google
            </button>
          </div>
        </div>

        <div className="register__main">
          <span className="register__mainText">Or login with email</span>

          <form className="register__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="register__input"
              placeholder="Email Address"
            />

            <input
              type="password"
              className="register__input"
              placeholder="Password"
            />

            {!showLoginPage && (
              <input
                type="password"
                className="register__input"
                placeholder="Confirm Password"
              />
            )}

            <Link to="/terms-conditions" className="aqua-btn">
              {showLoginPage ? "Login" : "Create Account"}
            </Link>
          </form>

          <span className="register__switchToLogin">
            {showLoginPage
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            {}
            <span
              onClick={() => {
                setShowLoginPage((prev) => !prev);
              }}
            >
              {showLoginPage ? "Register" : "Login"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
