import React from "react";
import CourseListRow from './CourseListRow';

// this function simply passes the courses and the toggle function
// to its child component. Another way to write this function would
// have been to specigy the props as a spread.

export default function CourseList({courses, toggleClick}) {
  return (
    <CourseListRow courses={courses} toggleClick={toggleClick} />
  );
}