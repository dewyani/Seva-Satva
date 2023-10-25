import React from "react"
import AdminNavBar from "./AdminNavbar"
import Grievance from "../student-components/Grievance"

export default function AdminGrievance()
{

    //take an array of object from backend

    // grievances.map((grievance)=>
    // (
    //     <div key={grievance.id}>
    //     id and grievance from fronted will be submited
           
    // ))

    return(
       
        <>
        <AdminNavBar/>
        <div className="admingrievance--main-div">
            <div className="admingrievance--sub-div" >
                <div className="admingrievance--p-div">
                <p>Name: Apulki Dubey</p>
                <p>Class: Comps A</p>
                <p>Sem: 3</p>
                </div>     
            </div>

            <div className="admingrievance--sub-div">
                <div className="admingrievance--p-div">
                <p>Name: Apulki Dubey</p>
                <p>Class: Comps A</p>
                <p>Sem: 3</p>
                </div>     
            </div>


            <div className="admingrievance--sub-div">
                <div className="admingrievance--p-div">
                <p>Name: Apulki Dubey</p>
                <p>Class: Comps A</p>
                <p>Sem: 3</p>
                </div>     
            </div>


            <div className="admingrievance--sub-div">
                <div className="admingrievance--p-div">
                <p>Name: Apulki Dubey</p>
                <p>Class: Comps A</p>
                <p>Sem: 3</p>
                </div>     
            </div>


            <div className="admingrievance--sub-div">
                <div className="admingrievance--p-div">
                <p>Name: Apulki Dubey</p>
                <p>Class: Comps A</p>
                <p>Sem: 3</p>
                </div>     
            </div>


            <div className="admingrievance--sub-div">
                <div className="admingrievance--p-div">
                <p>Name: Apulki Dubey</p>
                <p>Class: Comps A</p>
                <p>Sem: 3</p>
                </div>     
            </div>


        </div>
        </>
    )
}