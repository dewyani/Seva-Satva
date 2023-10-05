import React from 'react'
import cookingImg from '../images/cooking.png'
import updateImg from '../images/update.png'
import deleteImg from '../images/delete.png'

const CreateNote = ({input, setInput, saveHandler}) => {

  const {coursename, intake, instructor, image}= input

  function handleChange(event)
  {
    const {name, value, type}=event.target
     setInput( prevInputText=>({
        ...prevInputText,
        [name]: value
     }))

  }
    

  function handleImageUpload (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setInput( prevInput=>(
          {
            ...prevInput,
            image: event.target.result
          }
        )
          )
      }
      reader.readAsDataURL(file);
    }
  }



  return (
    <main className="allcourse--main">
          
    <div className="allcourse--div">

        {/* <input type="file" 
                name="image"
                value={image}
                onChange={handleImageUpload}
                /> */}
        <img src={cookingImg} alt="" />
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

export default CreateNote