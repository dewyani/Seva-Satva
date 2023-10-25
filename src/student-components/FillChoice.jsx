import React from "react";
import NavBar from "./NavBar";
import { useEffect } from "react";
import cookingImg from "../images/cooking.png";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Drag from "./Drag";
import { useDrop } from "react-dnd";

export default function FillChoice(props) {
  const { courses } = props;

  const [preferenceData, setPreferenceData] = React.useState({
    sem: "",
    preference: [],
  });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "li",
    drop: (item) => addImageToDiv(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToDiv = (id) => {
    const list = courses.filter((course)=> id === course.id)
    setPreferenceData((preferenceData.preference)=>[...preferenceData.preference, list[0]])
  };

  // console.log(preferenceData);
  function handleChange(event) {
    const { value, name } = event.target;

    setPreferenceData((prevpreferenceData) => {
      console.log(name)
      console.log(value)
      return {
        ...prevpreferenceData,
        [name]: value,
      };
    });
  }

  //get the array from backend
  React.useEffect(function () {
    // console.log("use effect");
  });

  return (
    <>
      <NavBar />
      
        <div className="fillchoice--outerdiv">
          <aside>
            <ul className="fillchoice--ul">
              {courses.map((course) => (
                // <li key={course.id} className="fillchoice--li">
                //   <img src={cookingImg} alt="course-img" />
                //   <span>{course.coursename}</span>
                // </li>
                <Drag  id={course.id} name={course.coursename} />
              ))}
            </ul>
          </aside>

          <section className="fillchoice--section">
            <p className="block">
              Courses will be alloted on first come, first serve basis
            </p>

            <div className="fillchoice--div">
              <h4>Preference form</h4>

              <div>
                <label htmlFor="semid" className="fillchoice--label">
                  Sem
                </label>
                <input
                  type="number"
                  id="semid"
                  name="sem"
                  onChange={handleChange}
                  value={preferenceData.sem}
                  placeholder="SEM"
                  className="fillchoice--input"
                />
              </div>

              <div className="fillchoice--input preferences" ref={drop}>
                <label htmlFor="preferenceid" className="fillchoice--label">
                  Enter 3 preferences
                </label>
                {/* <input
                type="text"
                id="preferenceid"
                name="preference"
                onChange={handleChange}
                value={preferenceData.preference}
                className="fillchoice--input preferences"
              /> */}

                {preferenceData.preference.map((element) => (
                  <Drag key={element.id} id={element.id} name={element.coursename} />
                ))}
              </div>
            </div>
          </section>
        </div>
      
    </>
  );
}
