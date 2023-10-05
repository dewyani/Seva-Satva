import React from 'react'

export default function Dashborad(props)
{
    return (

        <main className='dashboard--main'>
        <div className='dashboard--first-div'>
            <h4>Name: Raj Sharma</h4>
            <h4>UID: 2021300026</h4>
        </div>
               
        <div className='dashboard--second-div'>
            <div>
            <button>Sem {props.sem}</button>
            </div>
            <div className='dashboard--course-details'>
             <p>Name:  {props.course}</p>
             <p>Grade:  {props.grade}</p>
             <p>Current Status:  <span className={props.result=="pass"? "green": "red"}>{props.result}</span></p>
             </div>
        </div>
        </main>
    )
}