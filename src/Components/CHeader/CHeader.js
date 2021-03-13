import React from "react";
import logo from "../../Assets/logo1.png";
import bg from "../../Assets/bg (1).png"
import "./CHeader.css";

const CHeader = ({ heading }) => {
  return (
    <div className="chead">
      <div className="cheader">
        <img src={logo} className="left_logo" alt="logo" />
        <h3 className="right_logo">{heading}</h3>
        {/* <h3 className="right_logo">News</h3> */}
      </div>
    </div>
  );
};

export default CHeader;
