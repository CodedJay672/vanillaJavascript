import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import CourseList from './CourseList';
import AddCourse from './AddCourse';
import './App.css';


const testData = [
]

export default function App() {
  const [courses, setCourses] = useState(testData);
  const [userInput, setUserInput] = useState('');

  function entry(e) {
    e.preventDefault();
    const userEntry = e.target.value;
    setUserInput(userEntry);
  }

  function handleClick(event) {
    event.preventDefault();
    if (!userInput) {
      return;
    }
    const courseEntry = [...courses, { id: courses.length + 1, course: userInput, completed: false}];
    setCourses(courseEntry);
    setUserInput("");
  }

  function toggleClick(id) {
    const completed = courses.map((course) => {
      if (course.id === id && !(course.completed)) {
        course.completed = !(course.completed);
        console.log(course.completed);
      }
      return course;
    })
    setCourses(completed);
  }

  function deletedCompleted(event) {
    event.preventDefault();
    const filtered = courses.filter((course) => {
      return course.completed === false;
    })
    setCourses(filtered);
  }

  return (
    <>
      <header className="head">
        <img src={logo} alt='logo image' width="50" />
        <h2>Course entry portal</h2>
      </header>
      <main className="body">
        {courses.length > 0 ?
        <>
        <p>Courses Registered</p>
        <CourseList courses={courses} toggleClick={toggleClick} />
        <div className="clear">
          <button type="submit" onClick={deletedCompleted}>Clear completed</button>
        </div>
        </> : <i>No course regestered yet</i>
        }
        <AddCourse onChange={entry} handleClick={handleClick} value={userInput} />
      </main>
      <footer className="footer">
        <p>Copyright 2023</p>
      </footer>
    </>
  );
}