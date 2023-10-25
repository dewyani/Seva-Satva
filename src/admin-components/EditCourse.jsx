import React, { useEffect, useState } from 'react'
import CreateCourse from './CreateCourse'
import {nanoid} from 'nanoid'
import Course from './Course'
import cookingImg from "../images/cooking.png"
import AllCourses from './AllCourses'
import AdminNavBar from './AdminNavbar'


export default function EditCourse({courses, editToggle, input , image, setImage, saveHandler, setInput ,editHandler,deleteHandler}){
   
    console.log(courses.id)
    console.log(editToggle)


return (
   <>
   < AdminNavBar />
    <main className="allcourse--main">
        {
            courses.map((course) => (
                editToggle === course.id ?
                <CreateCourse 
                input ={input}
                image={image}
                setInput  = {setInput } 
                saveHandler = {saveHandler}
                setImage ={setImage}
                />
                :
                
                <Course
                    key={course.id}
                    id={course.id}
                    coursename={course.coursename}
                    intake={course.intake}
                    instructor={course.instructor}
                    // image={course.image}
                    image={image}
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
            image={image}
            setImage  = {setImage } 
            setInput  = {setInput } 
            saveHandler = {saveHandler}
        /> : <></>
        }
      
        
      </main>
      </>
  )
}

