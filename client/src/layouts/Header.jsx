import React from 'react'
import {  NavLink, useNavigate} from 'react-router'
import './Header.css'
export default function Header(props) {
  const navigate= useNavigate()
  return (
 <div className='head'>
   <nav className='nav'>
   <div className="mainNav">
         < NavLink className='NavLink'to='/'>
      DashBorad
    </NavLink>
     < NavLink className='NavLink'to='/status'>
      Status
    </NavLink>
     < NavLink className='NavLink'to='/addnew'>
      Add New
    </NavLink>   
   </div>
 <div className="profile">
<button className='btn text-white' onClick={()=>{localStorage.removeItem('token')
  navigate('/login')
}}>Logout</button>
 </div>
   </nav>
   {props.children}
 </div>
  )
}
