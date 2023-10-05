import React from "react";
import {Link} from "react-router-dom"

export default function NavBar()
{
    return(
        <nav className="navbar--nav">

            <div className="navbar--div">
                <h1>SEVA </h1>
                <h1>SATVA</h1>
                <p>Lifting Abilities, Enlarging Perspectives</p>
            </div>
            <ul className="navbar--ul">
                <li><Link to="/">All Courses</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/fillChoice">Fill Choice</Link></li>
                <li><Link to="/grievance">Grievance</Link></li>
            </ul>
        </nav>
    )
}