import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function OtpPage() {
    const navigation= useNavigate()
    const [otp, setOtp]= useState('')
    const style={

        "display":'flex',
        "justifyContent":"center"
    }

const location= useLocation()
console.log(location.state);

const handleVerify=async()=>{
const res= await fetch(`http://localhost:3000/api/emailverify/${location.state}`)
setClicked(true)
}

const handleChange=(e)=>{
setOtp(e.target.value)
}
  const handleSubmit=async(e)=>{
e.preventDefault()
const res= await fetch(`http://localhost:3000/api/otpverify/${otp}/${location.state}`,{
    method:'POST',
    headers:{
        "content-type":"application/json"
    }
})
if(res.ok){
    console.log(res);
    
    navigation('/login')
}
  } 
       return(
       <>
       
          <form onSubmit={handleSubmit}>
                <label htmlFor="otp">Otp:</label>
                <input type="text" className='form-control' onChange={handleChange} />
                <button className='btn btn-secondary' type='submit'>Verify</button>
            </form></>
        )
    
}
