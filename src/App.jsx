import React, { useState, useEffect } from 'react'

import './App.css'
import Login from './student-components/Login'
import Register from './student-components/Register'
import RegisterInstructor from './student-components/RegisterInstructor'
import RegisterStudent from './student-components/RegisterStudent'
import Dashboard from './student-components/Dashboard'
import AllCourses from './student-components/AllCourses'
import FillChoice from './student-components/FillChoice'
import Grievance from './student-components/Grievance'
import {Routes, Route, Link} from "react-router-dom"
import NavBar from './student-components/NavBar'

import AdminNavBar from './admin-components/AdminNavbar'
import EditCourse from './admin-components/EditCourse'
import NotAlloted from './admin-components/NotAlloted'
import AdminGrievance from './admin-components/AdminGrievance'

import CreateCourse from './admin-components/CreateCourse'
import Course from './admin-components/Course'

import {nanoid}  from "nanoid"

// import Model from 'react-modal' 
import cookingImg from "./images/cooking.png"



function App() {
        

const [input, setInput] = useState({
    coursename: "",
    intake: "",
    instructor: "",
    image: null
})
        const [courses, setCourses] = useState([])
        const [editToggle, setEditToggle] = useState(null)
    

        // console.log(courses)
        console.log(input.image)
        console.log(input)
        const editHandler = (id, coursename, intake, instructor, image) => {
            setEditToggle(id)
            setInput((prevInput)=> (
             
                   {
                ...prevInput,
                coursename:input.coursename,
                intake:input.intake,
                instructor:input.instructor,
                image:input.image
                }

            ))
        }
        
        const saveHandler = () => {
            if(editToggle) {
                setCourses(courses.map((course) => (
                    course.id === editToggle ?
                    {...course, 
                        coursename:input.coursename,
                        intake:input.intake,
                        instructor:input.instructor,
                        image:input.image
                    }
                    : course
                )))
            } 
            
            else {
                setCourses((prevCourses) => [
                    ...prevCourses, {
                        id: nanoid(),
                        coursename:input.coursename,
                        intake:input.intake,
                        instructor:input.instructor,
                        image:input.image
                    }
                ])

            }
            
            setInput("")
            setEditToggle(null)
        }
    
        const deleteHandler = (id) => {
            const newcourses = courses.filter(n => n.id !== id)
            setCourses(newcourses)
        }

        useEffect(() => {
            const data = JSON.parse(localStorage.getItem("courses"));
            if (data) {
               setCourses(data);
            }
          }, []);
    
      useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
      }, [courses]);
    
    
        
  return (
    
    <div>

       <div>
      <NavBar />
      <Routes>
      <Route path="/" element={< Login/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/registerinstructor" element={<RegisterInstructor />}/>
      <Route path="/registerstudent" element={<RegisterStudent />}/>
      <Route  path="/allcourses" element={<AllCourses/>} /> 
      <Route  path="/dashboard" 
      element={ <>
                <Dashboard name="Raj Sharma" 
                uid={2021300045} 
                sem={1} 
                course="Trek"
                 grade="AB" 
                 result="pass"
                />

                <Dashboard 
                uid={2021300043} 
                sem={2} 
                course="Cooking"
                 grade="FF" 
                 result="fail"
                />

               </>

      } 
      />
      <Route  path="/fillChoice" element={<FillChoice/>} />
      <Route  path="/grievance" element={<Grievance/>} /> 
      </Routes>
      </div> 

   {/*
     <div>
        
   < AdminNavBar />
        <Routes>

        <Route  path="/" element={<AllCourses 
                                      courses={courses}
                                      />}
                                       /> 

         <Route  path="/editcourse" element={<EditCourse
                                             
                                             courses={courses}
                                             setCourses={setCourses}
                                             input={input}
                                             setInput={setInput}
                                             editToggle={editToggle}
                                             setEditToggle={setEditToggle}
                                        
                                             editHandler={editHandler}
                                             saveHandler={saveHandler}
                                             deleteHandler={deleteHandler}


                                             />} /> 
         <Route  path="/notalloted" element={<NotAlloted/>} /> 
         <Route  path="/admingrievance" element={<AdminGrievance/>} />          

        </Routes>
      </div>
         */}

    </div>
     
      

  )
}

export default App
