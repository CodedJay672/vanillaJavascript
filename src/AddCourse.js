import React from "react";
import "./AddCourse.css";


// this function creates and input entry field which allows user
// to ener their courses. An add button allows the user to add the course
// entered into the list of registered components

export default function AddCourse({ onChange, value, handleClick}) {
  return (
    <>
      <form>
        <input type="text" value={value} onChange={onChange} placeholder="Enter course name..." />
        <button type="submit" onClick={handleClick}>Add</button>
      </form>
    </>
  )
}