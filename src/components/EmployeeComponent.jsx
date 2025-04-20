import React, { useEffect, useState } from "react";
import { addEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();
  const {id}=useParams()

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });


  //hook for getting employee data from database
  //and set the data in input fields
  //useEffect is used to perform side effects in functional components
  useEffect(() => {

    if (id) {
      getEmployee(id).then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch((error) => {
        console.error(error);
      })
      
    }
  },[id]) 


  //method for add new employee in database
  function saveOrUpdateEmployee(event) {
    event.preventDefault();
    if (validate()) {
      const employee = { firstName, lastName, email };
      console.log(employee);
      if(id){
          updateEmployee(id,employee).then((response)=>{
          console.log(response.data);
          navigator("/employees");
        }).catch((error)=>{
          console.error(error);
        })
      }
        addEmployee(employee).then((response) => {
            console.log(response.data);
            navigator("/employees");
          }).catch((error) => {
            console.error(error);
          })
        
    } 
  }



  //form validation
  function validate() {
    let valid = true;
    const copyErrors = { ...errors };

    if (firstName.trim()) {
      copyErrors.firstName = "";
    } else {
      copyErrors.firstName = "first name is required";
      valid = false;
    }
    if (lastName.trim()) {
      copyErrors.lastName = "";
    } else {
      copyErrors.lastName = "last name is required";
      valid = false;
    }

    if (email.trim()) {
      copyErrors.email = "";
    } else {
      copyErrors.email = "email is required";
      valid = false;
    }
 
    setErrors(copyErrors)
    return valid;
  }

  function pageTitle() {
    if(id){
      return <h2 className="text-center">Update Employee</h2>
    }
    else{
      return  <h2 className="text-center">Add Employee</h2>
    }
 }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  className={`form-control ${errors.firstName?'is-invalid':''}`}
                  name="firstName"
                  type="text"
                  placeholder="Enter Employee First Name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  className={`form-control  ${errors.lastName?'is-invalid':''}`}
                  name="lastName"
                  type="text"
                  placeholder="Enter Employee Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Enter Email:</label>
                <input
                  type="text"
                  name="email"
                  className={`form-control ${errors.email?'is-invalid':''}`}
                  placeholder="Enter Employee Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeComponent;
