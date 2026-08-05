import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, Route } from 'react-router'

export default function ProtectedRoutes({children}) {
    const [isLogedin,setIslogedin]= useState(null)
        useEffect(() => {
        const token = localStorage.getItem("token");

        if(token== null){
            setIslogedin(false);
        }else{
            setIslogedin(true);
        }

    }, []);
 if(isLogedin === null){
        return <h3>Loading...</h3>
    }


    if(!isLogedin){
        return <Navigate to='/login' replace/>
    }
  return (
    <>
      <Outlet/>
    </>
  )
}
