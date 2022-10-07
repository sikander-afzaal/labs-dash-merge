import React from "react";

import Register from "./pages/Register/Register";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import MasterPin from "./pages/MasterPin/MasterPin";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Nft from "./pages/Nft/Nft";
import Tokens from "./pages/Tokens/Tokens";
import Transaction from "./pages/Transaction/Transaction";
import Swap from "./pages/Swap/Swap";
import Activity from "./pages/Activity/Activity";
import Apps from "./pages/Apps/Apps";
import Terms from "./pages/Terms/Terms";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />

        <Route path="/terms-conditions" element={<TermsConditions />} />

        <Route path="/verify" element={<EmailVerification />} />

        <Route path="/master-pin" element={<MasterPin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/home" element={<Home />} />

        <Route path="/inventory" element={<Inventory />}>
          <Route path="" element={<Nft />} />
          <Route path="token" element={<Tokens />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="swap" element={<Swap />} />
          <Route path="activity" element={<Activity />} />
          <Route path="app" element={<Apps />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
