import React from "react";
import AdminNavBar from "./AdminNavbar";

//after clicking on the id this page will open, it will have grievace as a prop rendered in app.js then you will do if grievance id ==id the render all the remainig items
export default function GrievancePage() {
  return (
    <>
      <AdminNavBar />
      <main className="grievancepage--main">
        <div className="grievancepage--div">
          <div className="grievancepage--p-div">
            <p>Name: Arpana Daas</p>
            <p>Class: Comps A</p>
            <p>Sem: 3</p>
            <p className="space">Grievance</p>
            <p className="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              voluptatibus, temporibus, amet laborum sed dolorem ratione
              possimus alias veritatis ullam ad veniam labore laudantium illum,
              animi ea nostrum voluptatem quidem.
            </p>
          </div>
        </div>

        
          <button className="grievancepage--button">Allot Course</button>
        

      </main>
    </>
  );
}
