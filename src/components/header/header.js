import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
const Header = ({ currentUser }) => (
  <div className="header">
    <div className="options">
      {currentUser ? (
        <Link to="/" className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        ""
      )}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(Header);
