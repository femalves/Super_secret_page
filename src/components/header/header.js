import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="option" onClick={() => auth.signOut()}>
      <Link to="/">{currentUser ? <div>SIGN OUT</div> : ""}</Link>
    </div>
  </div>
);
export default Header;
