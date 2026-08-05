import React, { useEffect, useState } from 'react'
import HeaderForR_L from '../layouts/HeaderForR&L'
import { NavLink, useNavigate } from 'react-router'

export default function RegisterPage() {
  const navigate= useNavigate()
const[user, setUser]=useState({
  name:'',
  email:'',
  password:''
})
const handleChange=(e)=>{
setUser({
  ...user,
  [e.target.name]:e.target.value
})
}
const hangleSubmit=async(e)=>{
  e.preventDefault()
 const response = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
 if(response.ok){
navigate('/otp',{
  state:user.email
})
 }
};

  return (
    <HeaderForR_L>
         <div className="main_login">
        <form className="form" onSubmit={hangleSubmit}>
          <h2 style={{textAlign:'center', fontWeight:"700"}}>Register</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" name='name' onChange={handleChange}/>
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" name='email'  onChange={handleChange}  />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" className="form-control" name='password'  onChange={handleChange}/>

        <button className="btn btn-primary " type='submit'>Submit</button>
        <NavLink to='/login' className='a'>I have an account</NavLink>
      </form>
    </div>
    </HeaderForR_L>
  )
}
