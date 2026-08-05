import React, { useState } from "react";
import Header from "../layouts/Header";
import "./createNewTask.css";
import { useLocation, useNavigate } from "react-router";
export default function CreateNewTask() {
  const location = useLocation();
  const updatevalue = location.state;

  const navigate = useNavigate();
  const [text, setText] = useState(updatevalue?.text || "");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const token = localStorage.getItem("token");
  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3000/api/updateTask/${updatevalue?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          token,
        },
        body: JSON.stringify({ text }),
      },
    );
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/newTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        token,
      },
      body: JSON.stringify({ text }),
    });
    navigate("/");
  };
  return (
    <Header>
      {updatevalue ? (
        <form className="add-form" onSubmit={handleUpdate}>
          <label htmlFor="task">Add Task:</label>
          <input
            type="text"
            className="form-control"
            name="text"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-secondary">
            Update
          </button>
        </form>
      ) : (
        <form className="add-form" onSubmit={handleSubmit}>
          <label htmlFor="task">Add Task:</label>
          <input
            type="text"
            className="form-control"
            name="text"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      )}
    </Header>
  );
}
