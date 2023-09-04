import React from "react";
import './CourseListStyle.css';

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