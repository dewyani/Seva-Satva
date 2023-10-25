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

  const [board, setBoard] =React.useState([{id: 'gZ80VEHx31hrOqUHue2mr', coursename: 'Running', instructor: 'Ross'}]);

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
    console.log("id "+id)

     var data = courses.filter((course)=> String(id) === String(course.id))

    // const data = courses.map(course=>

    //   {

    //     if(id===course.id)
    //     {
    //       return course
          
    //     }
    //   }
    //      )

    console.log(data)
    
  //  console.log("list" +list[0])
    setBoard((board)=>[...board,data[0]])

  };

  console.log(board)

  // console.log(preferenceData);
  function handleChange(event, board) {
    const { value, name } = event.target;

    setPreferenceData((prevpreferenceData) => {
      return {
        ...prevpreferenceData,
        [name]: value,
        preference: board
      };
    });
  }
  
  console.log(preferenceData)
  
  //get the array from backend
  React.useEffect(function () {
    // console.log("use effect");
  },[]);

  return (
    <>
      <NavBar />
      
        <div className="fillchoice--outerdiv">
          <aside>
            <ul className="fillchoice--ul">
              {courses.map((course) => (
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
              
              {/* <p className="fillchoice--label">Enter 3 preferences</p> */}
              <div ref={drop} className="fillchoice--input preferences maindiv"  onChange={handleChange}>
                {/* <label htmlFor="preferenceid" className="fillchoice--label">
                  Enter 3 preferences
                </label>  */}
                {/* <input
                // ref={drop} 
                type="text"
                id="preferenceid"
                name="preference"
                onChange={handleChange}
                value={preferenceData.preference}
                className="fillchoice--input preferences"
              />  */}

                 {/* {board.map((element) => (
                  <Drag key={element.id} id={element.id} name={element.coursename} />
                ))}  */}

{board.map((element) => {
  if (!element || !element.id) {
    return console.log("no id")// or handle accordingly
  }
  return <Drag key={element.id} id={element.id} name={element.coursename} />;
})} 

              </div>
            </div>
          </section>
        </div>
      
    </>
  );
}

