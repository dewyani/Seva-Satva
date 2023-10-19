import React from 'react'
import NavBar from './NavBar'

export default function Grievance()
{
    const [grievanceData , setGrievanceData] = React.useState({
                                               grievance: ""
                                               })
    
                                      
    function handleChange(event)
    {
        setGrievanceData(prevData=>{
            return {
                ...grievanceData,
                [event.target.name] : event.target.value    
            }
        })
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        // submittoApi(formData)
        alert("Grievance form submitted successfully")

    }


    return (

        <>
        <NavBar/>
        <form onSubmit={handleSubmit} className='grievance--form'>
            <h4>Grievance form</h4>
            <div className='grievance--div'>
                <textarea
                 placeholder='Enter your grievance'
                 name="grievance"
                 onChange={handleChange}
                 value={grievanceData.grievance}/>
                 <button>SUBMIT</button>
            </div>

               
        </form>
     </>
    )
}