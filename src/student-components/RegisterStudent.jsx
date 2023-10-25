import React from "react";
import registerImage from "../images/register.png";
import Login from "./Login";
import profileLogo from "../images/user.png";
import headerImage from "../images/header.png";


export default function RegisterStudent() {
  const [studentData, setStudentData] = React.useState({
    name: "",
    email: "",
    branch: "comps",
    uid: "",
    password: "",
  });

  // console.log(studentData)
  function handleChange(event) {
    console.log("rendered once");
    const { type, value, checked, name } = event.target;

    setStudentData((prevstudentData) => {
      return {
        ...prevstudentData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submittoApi(studentData)
  }

  return (
    <>
      <header className="login--header">
        <img src={headerImage} alt="header" />
        <div className="navbar--div login--seva-satva">
          <h1>SEVA </h1>
          <h1>SATVA</h1>
          <p>Lifting Abilities, Enlarging Perspectives</p>
        </div>
      </header>

      <section className="register--section">
        <form
          onSubmit={handleSubmit}
          className="register--form  registerstudent--form"
        >
          <div>
            <img src={profileLogo} alt="Profile Logo" />
            <h4>Register Student</h4>
          </div>

          <div className="register--div">
            <div>
              <label htmlFor="nameid" className="block">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="nameid"
                placeholder="Name"
                onChange={handleChange}
                value={studentData.name}
                className="registerstudent--form-input-design"
              />
            </div>

            <div>
              <label htmlFor="emailid" className="block">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="emailid"
                placeholder="Email"
                onChange={handleChange}
                value={studentData.email}
                className="registerstudent--form-input-design"
              />
            </div>

            <div>
              <label htmlFor="uidid" className="block">
                UID
              </label>
              <input
                type="number"
                name="uid"
                id="uidid"
                placeholder="UID"
                onChange={handleChange}
                value={studentData.uid}
                className="registerstudent--form-input-design"
              />
            </div>

            <div>
              <label htmlFor="branchid" className="block">
                Branch
              </label>
              <select
                name="branch"
                id="branchid"
                onChange={handleChange}
                value={studentData.branch}
              >
                <option value="comps">Comps</option>
                <option value="it">IT</option>
                <option value="ds">CSE-DS</option>
                <option value="aiml">CSE-AIML</option>
                <option value="extc">EXTC</option>
                <option value="etrx">ETRX</option>
              </select>
            </div>

            <div>
              <label htmlFor="passwordid" className="block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="passwordid"
                placeholder="Password"
                onChange={handleChange}
                value={studentData.password}
                className="registerstudent--form-input-design"
              />
            </div>

            <button className="nodecor submit">
              <a href="/allcoursesstudent">SUBMIT</a>
            </button>

            <p>
              Already registered?{" "}
              <a href="/" className="nodecor">
                Login here
              </a>
            </p>
          </div>
        </form>

        <img
          src={registerImage}
          alt="registerImage"
          className="register--img"
        />
      </section>
    </>
  );
}
