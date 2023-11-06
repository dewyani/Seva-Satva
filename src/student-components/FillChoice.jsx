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

  //to check courses
  // courses.map((course)=>{
  //   console.log("course: \n courseid "+ course.id + "coursename: "+course.coursename )
  // })

  const addImageToDiv = (id) => {
    console.log("id " + id);

    const data = courses.filter((course) => String(id) === String(course.id));

    setPreferenceData((prevPreferenceData) => ({
      ...prevPreferenceData,
      preference: [...prevPreferenceData.preference, data[0]],
    }));
  };

  

  
  function handleChange(event) {
    const { value, name } = event.target;

    setPreferenceData((prevpreferenceData) => {
      return {
        ...prevpreferenceData,
        [name]: value,
        
      };
    });
  }
 
  console.log(preferenceData) 

  //get the array from backend
  React.useEffect(function () {
    // console.log("use effect");
  }, []);

  return (
    <>
      <NavBar />

      <div className="fillchoice--outerdiv">
        <aside className="fillchoice--aside">
          <ul className="fillchoice--ul">
            {courses.map((course) => (
              <Drag id={course.id} name={course.coursename} />
            ))}
          </ul>
        </aside>

        <section className="fillchoice--section">
          <p className="block fillchoice--section-p">
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

            <p className="fillchoice--label">Enter 3 preferences</p>
            <div
              ref={drop}
              className="fillchoice--input preferences fillchoice--li" 
              onChange={handleChange}
            >
           
              
              {preferenceData.preference.map((element,i) => {
                if (preferenceData.preference.length > 0)
                { 
                  return (
                    <Drag
                      key={i}
                      id={element.id}
                      name={element.coursename}
                    />
                  );
                }
              }
              )}

             
            </div>
          </div>
          <button type="submit" className="fillchoice--button">SUBMIT</button>
        </section>
      </div>
    </>
  );
}
