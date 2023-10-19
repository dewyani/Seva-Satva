import React from "react";

import cookingImg from "../images/cooking.png";
import addImg from "../images/add.png";
import updateImg from "../images/update.png";
import deleteImg from "../images/delete.png";
import NavBar from "../student-components/NavBar";

export default function AllCoursesStudent(props) {
  const { courses } = props;

  return (
    <>
      <NavBar/>
      <main className="allcourse--main">
        {courses.map((course) => (
          <div className="allcourse--div" key={course.id}>
            <img src={cookingImg} alt="cooking image" />
            <div className="allcourse--innerdiv">
              <hr />
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
