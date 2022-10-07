import React from "react";

import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import "./MasterPin.css";

const MasterPin = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="masterpin">
        <div className="masterpin__header">
          <FontAwesomeIcon icon={faChevronLeft} onClick={() => navigate(-1)} />

          <img src="assets/logo-gif.gif" alt="logo" />
        </div>

        <div className="masterpin__content">
          <h1 className="masterpin__heading">Set Master Pin</h1>

          <p className="masterpin__para">
            Your Master Pin is a number between 4 and 6 digits, easy to
            remember, but hard to crack. This pin will act as your master key,
            you can compare it to the pin of your Debit Card.
          </p>

          <div className="masterpin__input">
            <span>Enter Master Pin</span>
            <input type="password" />
          </div>

          <div className="masterpin__input">
            <span>Confirm Master Pin</span>
            <input type="password" />
          </div>

          <Link to="/home" className="aqua-btn">
            Set
          </Link>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MasterPin;
