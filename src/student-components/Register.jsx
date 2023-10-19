import React from 'react'
import registerImage from '../images/register.png';
import Login from './Login';
import profileLogo from '../images/user.png'

import { useNavigate } from 'react-router-dom';

export default function Register()
{
    const navigate = useNavigate();
    const [adminData , setAdminData] = React.useState({

        name: "",
        email: "",
        password: "",
    
                                              
    })
    
    
    // console.log(adminData)
    function handleChange(event)
    {
        console.log("rendered once")
    const {type, value, checked, name}=event.target

    setAdminData(prevadminData=>{
    return {
    ...prevadminData,
    [name]: value
    }
    })
    }
    
    function handleSubmit(event)
    {

   
    //  navigate('/allcourses')
    
    event.preventDefault();
    // submittoApi(adminData)
    
    }
    
    return (
   
    <section className='register--section' >
    <form onSubmit={handleSubmit} className="register--form">

    <div>
    <img src={profileLogo} alt="Profile Logo" />      
    <h4>Register Admin</h4>
    </div>

    <div className='register--div'>

    
    <div>
    <label htmlFor="nameid" className='block'>Name</label>
    <input type="text" 
            name="name"
            id="nameid"
            placeholder='Name'
            onChange={handleChange}
            value={adminData.name}
            className='login--form-input-design'
             />
    </div>
    
    <div>
    <label htmlFor="emailid" className='block'>Email</label>
    <input type="email" 
            name="email"
            id="emailid"
            placeholder='Email'
            onChange={handleChange}
            value={adminData.email}
            className='register--form-input-design'
             />
    </div>
    
    <div>
    <label htmlFor="passwordid" className='block'>Password</label>
    <input type="password" 
            name="password"
            id="passwordid"
            placeholder='Password'
            onChange={handleChange}
            value={adminData.password}
            className='register--form-input-design'
             />
    </div>


      
    <button className='nodecor submit'> <a href= "/allcourses">SUBMIT</a></button>

    <p>Already registered? <a href="/" className='nodecor'>Login here</a></p>
    </div>
    
    
    </form>

    <img src={registerImage} alt="registerImage"  className='register--img'/>
    </section>
    )
}

