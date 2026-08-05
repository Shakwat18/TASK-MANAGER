import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Task from "../components/Task";

export default function DashBoard() {
  const [tasks, setTasks] = useState([]);
  const token = window.localStorage.getItem("token");

    async function handleDelete (id){
    const res=await fetch(`http://localhost:3000/api/deleteTask/`+id ,{
      method:'GET',
      headers:{
    token
      }

    })
    const data=await res.json()
   if(res.ok){
    setTasks((pre)=>pre.filter(tasks=>tasks._id !== id))
   }
  }
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api/allTask", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          token,
        },
      });
      const data = await res.json();
      setTasks(data.task);
    })();
    
  }, []);

  console.log(tasks);
if(tasks=== null ){
  return <Header>
    <h3>There is no Task</h3>
  </Header>
}
  return (
    <Header>
      {tasks.map((task) => (
        <Task task={task} handleDelete={handleDelete}/>
      ))}
    </Header>
  );
}
