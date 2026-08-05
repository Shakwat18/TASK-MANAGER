import React from 'react'
import {  NavLink} from 'react-router'
import './Header.css'
export default function Header(props) {
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
< NavLink className='NavLink'to='/logout'>
     Logout
    </NavLink>
 </div>
   </nav>
   {props.children}
 </div>
  )
}
