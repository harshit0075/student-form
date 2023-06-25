import React, { useReducer, useState } from "react";

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME":
      return { ...state, name: payload };
    case "BATCH":
      return { ...state, batch: payload }
    case "COURSE":
      return { ...state, course: payload };
    case "IMAGE":
      return { ...state, image: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "STATUS":
      return { ...state, status: payload ? "active" : "inactive" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const AddStudent = () => {

  const [students, setStudents]=useState([]);
  const [state, dispatch]=useReducer(reducer, initialState);

  const addStudent=(e)=>{
    e.preventDefault();
    setStudents([...students, state]);
    dispatch({type: "RESET"})
  }

    
  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form onSubmit={addStudent} data-testid="input-form">
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name :</label>
         <input
         type="text"
         placeholder="NAME"
         value={state.name}
         onChange={(e)=>{
          dispatch({type: "NAME", payload: e.target.value})
         }}
         />
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch :</label>
         <input
         type="text"
         placeholder="BATCH"
         value={state.batch}
         onChange={(e) => {
          dispatch({type: "BATCH", payload: e.target.value})
         }}
         />
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course :</label>
            <input
         type="text"
         placeholder="Course"
         value={state.course}
         onChange={(e) => {
          dispatch({type: "COURSE", payload: e.target.value})
         }}
         />
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image :</label>
            <input
         type="text"
         placeholder="IMAGE"
         value={state.image}
         onChange={(e) => {
          dispatch({type: "IMAGE", payload: e.target.value})
         }}
         />
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating :</label>
            <select
        name="rating"
        value={state.rating}
        data-testid="rating-select"
         onChange={(e) => {
          dispatch({type: "RATING", payload: e.target.value})
         }}
         >
          <option value="0">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
         </select>
          </div>


          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
             <input
             type={"checkbox"}
             name="status"
             onChange={(e)=>{
              dispatch({type: "STATUS", payload: e.target.value})
             }}
             />
              <label>Active</label>
            </div>
          </div>
          <button type="submit">ADD Student</button>
        </form>
      </div>
    </div>
  );
};
