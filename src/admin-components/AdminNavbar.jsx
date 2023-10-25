import React from "react";
import {Link} from "react-router-dom"

export default function AdminNavBar()
{
    return(
        <nav className="navbar--nav">

            <div className="navbar--div">
                <h1>SEVA </h1>
                <h1>SATVA</h1>
                <p>Lifting Abilities, Enlarging Perspectives</p>
            </div>
            <ul className="navbar--ul">
                <li><Link to="/allcourses">All Courses</Link></li>
                <li><Link to="/editcourse">Edit Course</Link></li>
                <li><Link to="/notalloted">Not Alloted</Link></li>
                <li><Link to="/admingrievance">Grievance</Link></li>
            </ul>
        </nav>
    )
}