import React from "react";
import logo from "../../Assets/logo1.png";
import bg from "../../Assets/bg (1).png"
import "./CHeader.css";
import {Link} from "react-router-dom";

const CHeader = ({ heading }) => {
  return (
    <div className="chead">
      <div className="cheader">
      <Link to="/">
      <img src={logo} className="left_logo" alt="logo" />
      </Link>
        <h3 className="right_logo">{heading}</h3>
      </div>
    </div>
  );
};

export default CHeader;
