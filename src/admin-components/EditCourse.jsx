import React, { useEffect, useState } from 'react'
import CreateCourse from './CreateCourse'
import {nanoid} from 'nanoid'
import Course from './Course'
import cookingImg from "../images/cooking.png"
import AllCourses from './AllCourses'
import AdminNavBar from './AdminNavbar'


export default function EditCourse({courses, editToggle, input, saveHandler, setInput ,editHandler,deleteHandler}){
   
    // console.log(courses.id)
    // console.log(courses)
    // console.log(editToggle)


return (
   <>
   < AdminNavBar />
    <main className="allcourse--main">
        {
            courses.map((course) => (
                editToggle === course.id ?
                <CreateCourse 
                input ={input}
                setInput  = {setInput} 
                saveHandler = {saveHandler}
                />
                :
                
                <Course
                    key={course.id}
                    id={course.id}
                    coursename={course.coursename}
                    intake={course.intake}
                    instructor={course.instructor}
                    image={course.image}
                    editHandler = {editHandler}
                    deleteHandler= {deleteHandler}
                >
                </Course>
               
            ))
        }


        {
            editToggle === null ? 
            <CreateCourse 
            input ={input}
            setInput  = {setInput } 
            saveHandler = {saveHandler}
        /> : <></>
        }
      
      {/* <CreateCourse/> */}
        
      </main>
      </>
  )
}

