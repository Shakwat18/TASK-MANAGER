import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function ResetPassword() {
    const navigate= useNavigate()

    const location= useLocation()
    const [email,setEmail]=useState(location.state||'')
    const handleClick=()=>{
navigate('/opt')
    }
  return (
    <div>
     <label htmlFor="email">Email:</label>
     <input type="email" name="email" id="email" className='form-control' />
     <button onClick={handleClick} className='btn'> Verify</button>
    </div>
  )
}
