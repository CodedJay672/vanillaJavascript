import React from "react";
import './CourseListStyle.css';


// thsi component then receives the courses and creates individual divs for
// each user entry. every single course entered by the user will have its 
// own attributes as well as properties. 
export default function CourseListRow({ courses, toggleClick }) {
  return (
    <>
    {courses.map((course) => {
      return (
        <div
          key={course.id}
          onClick={() => toggleClick(course.id)}
          className={course.completed ? "completed" : "notCompleted"}
        >
          {course.course}
        </div>
      )
    })}
    </>
  )
}