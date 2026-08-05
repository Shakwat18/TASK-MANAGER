import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Status from "../components/Status";

export default function StatusPage() {
  

  const [results,setResult]= useState([])
  useEffect(() => {
    const token = localStorage.getItem("token");
  (async () => {
     const res =await fetch("http://localhost:3000/api/status", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        token,
      },
    });

  const data =await res.json();
  setResult(data.result)
})()
  }, []);
  return <Header>
    {results.map((result)=><Status key={result._id} result={result}/>)}
  </Header>;
}
