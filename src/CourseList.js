import React from "react";
import CourseListRow from './CourseListRow';

export default function CourseList({courses, toggleClick}) {
  return (
    <CourseListRow courses={courses} toggleClick={toggleClick} />
  );
}