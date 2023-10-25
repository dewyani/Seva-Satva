import React from "react";
import NavBar from "./NavBar";
import { nanoid } from "nanoid";

export default function Grievance() {
  const [grievanceData, setGrievanceData] = React.useState([]);

  function handleChange(event) {
    setGrievanceData((prevData) => [
      ...grievanceData,
      {
        id: nanoid(),
        [event.target.name]: event.target.value,
      },
    ]);
  }

  function handleSubmit(event) {
      event.preventDefault();
    //   console.log(grievanceData)
    // submittoApi(formData)
    alert("Grievance form submitted successfully");
  }

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit} className="grievance--form">
        <h4>Grievance form</h4>
        <div className="grievance--div">
          <textarea
            placeholder="Enter your grievance"
            name="grievance"
            onChange={handleChange}
            value={grievanceData.grievance}
          />
          <button>SUBMIT</button>
        </div>
      </form>
    </>
  );
}
