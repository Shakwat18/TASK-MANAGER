import React from "react";
import "./Headerrl.css";
import { NavLink } from "react-router";
export default function HeaderForR_L(props) {
  return (
    <div className="rlnavdiv">
      <nav className="rlnav">
        <div className="logo"><span>Task Manager</span></div>
     <div className="r_l">
         <NavLink className="rlNavLink" to="/register">
          Register
        </NavLink>
        <NavLink className="rlNavLink" to="/login">
          Login
        </NavLink>
     </div>
      </nav>
      {props.children}
    </div>
  );
}
