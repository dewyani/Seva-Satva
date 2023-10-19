import React from 'react'
import Register from './Register'
import RegisterInstructor from './RegisterInstructor';
import RegisterStudents from './RegisterStudent';
import loginImage from '../images/login.png';
import AllCourses from '../admin-components/AllCourses';



export default function Login(props)
{
    const [formData , setFormData] = React.useState({

        role: "student",
        email: "",
        password: "",
        forget: false
                                              
    })
    
    
    console.log(formData)
    
    function handleChange(event)
    {
    const {type, value, checked, name}=event.target

    setFormData(prevFormData=>{
    return {
    ...prevFormData,
    [name]: type=="checkbox"? checked: value
    }
    })
    }
    
    function handleSubmit(event)
    {
    event.preventDefault();
    // submittoApi(formData)
    
    }

    
    let nextpage;

    if(formData.role=="student")
    {
        nextpage="registerstudent"
    }
    else if(formData.role=="admin")
    {
        nextpage="register"
    }
    else{
        nextpage="registerinstructor"
    }
    
    return (
   
    <section className='login--section'>
    <form onSubmit={handleSubmit} className="login--form">

    <div>    
    <h4 className='form-h4'>Sign in</h4>
    </div>

    <div className='login--div'>

    <div>
    <label htmlFor="roleid" className='block'>Role</label>
    <select name="role" 
    id="roleid" 
    onChange={handleChange}
    value={formData.role}>    
    
    <option value="student">Student</option>    
    <option value="instructor">Instructor</option>    
    <option value="admin">Admin</option>    
    </select>
    </div>
    
    <div>
    <label htmlFor="emailid" className='block'>Email</label>
    <input type="email" 
            name="email"
            id="emailid"
            placeholder='Email'
            onChange={handleChange}
            value={formData.email}
            className='login--form-input-design'
             />
    </div>
    
    <div>
    <label htmlFor="passwordid" className='block'>Password</label>
    <input type="password" 
            name="password"
            id="passwordid"
            placeholder='Password'
            onChange={handleChange}
            value={formData.password}
            className='login--form-input-design'
             />
    </div>

    <div>
    <input type="checkbox"
            id="forget"
            name="forget"
            checked={formData.forget}
            onChange={handleChange}     
            />

    <label className="login--forget-label" htmlFor="forget">Forget password</label>        
    </div>

    <button><a href="allCourses" className='nodecor'>Sign in</a></button>

    <p>Don't have an account? <a href={nextpage} className='nodecor'>Register Here</a></p>
    </div>
    
    
    </form>

    <img src={loginImage} alt="loginImage"  className='login--img'/>
    </section>
    )
}

