import React from 'react'
import NavBar from './NavBar'

export default function FillChoice()
{


    const [preferenceData , setPreferenceData] = React.useState({

        sem: "",
        preference: ""
                                              
    })
    
    
    console.log(preferenceData)
    function handleChange(event)
    {
    const { value, name}=event.target

    setPreferenceData(prevpreferenceData=>{
    return {
    ...prevpreferenceData,
    [name]: value
    }
    })
    }


    return (
        
        <>

        <NavBar/>
        
        <div className='fillchoice--outerdiv'>
            <aside > 

            </aside>
            
            <section className='fillchoice--section'>
             
              <p className='block'>Courses will be alloted on first come, first serve basis</p>
              
                <div className='fillchoice--div'>
                   <h4>Preference form</h4>

                   <div>
                   <label htmlFor="semid" className='fillchoice--label'>Sem</label>
                   <input type="number" 
                    id="semid" 
                    name="sem"
                    onChange={handleChange}
                    value={preferenceData.sem}
                    placeholder='SEM'
                    className='fillchoice--input'/>
                   
                    </div>


                <div>
                   <label htmlFor="preferenceid" className='fillchoice--label'>Enter 3 preferences</label>
                   <input type="text" 
                    id="preferenceid" 
                    name="preference"
                    onChange={handleChange}
                    value={preferenceData.preference}
                    className='fillchoice--input preferences'
                    />
                    </div>
                </div>

                
            </section>
             
        </div>

        </>
    )
}