import React from "react";
import HeaderForR_L from "../layouts/HeaderForR&L";
import "./login.css";
export default function LoginPage() {
  return (
    <HeaderForR_L>
    <div className="main_login">
        <form className="logi-form">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" />
      </form>
    </div>
    </HeaderForR_L>
  );
}
