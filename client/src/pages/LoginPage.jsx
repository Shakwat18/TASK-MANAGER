import React, { useState } from "react";
import HeaderForR_L from "../layouts/HeaderForR&L";
import "./login.css";
import { NavLink, useNavigate } from "react-router";
export default function LoginPage() {
  const [user, setUser]=useState({
  email:'',
  password:''
  })
const navigate=useNavigate()
 const handleChange=(e)=>{
setUser({
  ...user,
  [e.target.name]:e.target.value
})
  }
  const handleSubmit=async(e)=>{
e.preventDefault()
const res= await fetch('http://localhost:3000/api/login',{
  method:'POST',
  headers:{"content-type":"application/json"},
  body: JSON.stringify(user)

})
const data= await res.json()
localStorage.setItem('token',data.token)
if(res.ok){
  navigate('/')
}
  }

  const handleClick=()=>{
    navigate('/resetPassword',{
      state:user.email
    })
  }
  return (
    <HeaderForR_L>
      <div className="main_login">
        <form className="form" onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center", fontWeight: "700" }}>Login</h3>
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" name="email"  onChange={handleChange}/>
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control"   name="password"  onChange={handleChange}/>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
                  <NavLink className='a ' onClick={handleClick}>Forget Password</NavLink>
                  <NavLink to='/register' className='a'>I don't have an account</NavLink>

        </form>
      </div>
    </HeaderForR_L>
  );
}
