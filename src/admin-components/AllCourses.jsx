import React, { useEffect, useState } from "react";

import cookingImg from "../images/cooking.png";
import addImg from "../images/add.png";
import updateImg from "../images/update.png";
import deleteImg from "../images/delete.png";
import AdminNavBar from "./AdminNavbar";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

export default function AllCourses(props) {

  const [courses, setCourses] = useState([])
  const navigate = useNavigate()

  useEffect((() => {
    axios.get("http://localhost:4000/course/allCourse")
      .then((response) => {
        setCourses(response.data.courseDocs)
      })
  }), [])

  // const { courses,image } = props;
  const { image } = props;

  return (
    <>
      < AdminNavBar />
      <main className="allcourse--main">
        {
          courses.map((course) => (
            <div className="allcourse--div" key={course._id}>
              <img src={image || cookingImg} alt="cooking image" />
              <div className="allcourse--innerdiv">
                <hr />
                <p className="bold">{course.name}</p>
                <p>Intake capacity: {course.intake_Capacity}</p>
                <p>Prof. {course.prof_Incharge}</p>
                <button><Link to={`/studentsenrolled/${course._id}`}>Click Here</Link></button>
              </div>
            </div>
          ))}
      </main>
    </>
  );
}
