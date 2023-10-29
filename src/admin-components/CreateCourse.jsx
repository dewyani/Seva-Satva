import React, { useState } from 'react'
import cookingImg from '../images/cooking.png'
import uploadImg from '../images/uploadImg.png'
import updateImg from '../images/update.png'
import deleteImg from '../images/delete.png'
import { useRef } from 'react'

const CreateCourse = ({input, setInput, saveHandler}) => {

  const {coursename, intake, instructor, image}= input
  const inputRef = useRef(null);

  

  const handleImageClick =()=>
  {
    inputRef.current.click();
  }



  const handleImageChange = (event) =>
  {
     const file=event.target.files[0];
     const imageUrl = URL.createObjectURL(file)
     
     console.log(file);
    //  setImage(event.target.files[0]);
    setInput(prevInputText =>(
      {
        ...prevInputText,
        image: imageUrl
      }
    )
    )
  }


  function handleChange(event)
  {
    const {name, value, type}=event.target
     setInput( prevInputText=>({
        ...prevInputText,
        [name]: value,

     }))

  }



  return (
    <main className="allcourse--main">
          
    <div className="editcourses--div">

         <div onClick={handleImageClick} style={{border: "2px solid red"}}>
          
          {image? <img src={image} alt="" /> : <img src={uploadImg} alt="" />}
        
         <input type="file" ref={inputRef} onChange={handleImageChange} style={{display : "none"}}/> 
         </div>

         <div className="allcourse--innerdiv">
         <hr />
       
             <input type="text" 
                placeholder='Course Name'
                value={coursename}
                name="coursename"
                onChange={handleChange}
               />

              <input type="text" 
                placeholder='Intake Capacity'
                value={intake}
                name="intake"
                onChange={handleChange}
               />


            <input type="text" 
                placeholder='Instructor Name'
                value={instructor}
                name="instructor"
                onChange={handleChange}
               />

               </div>

       
        <div>
           <button className="createcourse--button" onClick={saveHandler}>Save</button>
        </div>
    </div>
    
  </main>
  
  )
}

export default CreateCourse