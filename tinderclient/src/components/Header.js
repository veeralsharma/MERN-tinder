import React from "react";
import "../css/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {

  const history = useHistory()

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)} >
          <ArrowBackIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header_logo"
          src="https://cdn.iconscout.com/icon/free/png-256/tinder-7-226557.png"
          alt=""
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
