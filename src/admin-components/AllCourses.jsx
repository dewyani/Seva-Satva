import React from "react";

import cookingImg from "../images/cooking.png";
import addImg from "../images/add.png";
import updateImg from "../images/update.png";
import deleteImg from "../images/delete.png";
import AdminNavBar from "./AdminNavbar";

export default function AllCourses(props) {
  const { courses } = props;

  return (
    <>
      < AdminNavBar />
      <main className="allcourse--main">
        {
        courses.map((course) => (
          <div className="allcourse--div" key={course.id}>
            <img src={cookingImg} alt="cooking image" />
            <div className="allcourse--innerdiv">
              <hr/>
              <p className="bold">{course.coursename}</p>
              <p>Intake capacity: {course.intake}</p>
              <p>{course.instructor}</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
