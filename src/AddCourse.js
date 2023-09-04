import React from "react";
import "./AddCourse.css";

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