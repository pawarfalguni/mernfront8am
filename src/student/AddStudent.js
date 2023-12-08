import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";

const AddStudent = () => {
  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [address, setAddress] =useState('');

  const sumbitHandler= (e)=>{
    e.preventDefault();
    axios.post("https://mernback8am-6jsd.onrender.com/student",{name, email, address})
    .then((res)=>{
      alert("Student data added success...");
      setName('');
      setEmail('');
      setAddress('');
    })
    .catch((err)=>{
      alert('unable to add the data');
    })
  }

  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Add Student</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Add Student{" "}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4" >
              <div class="shadow-lg p-3 mb-5 bg-white rounded">
                <form onSubmit={sumbitHandler}>
                  <div class="mb-4 mt-2">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Id"
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      placeholder="Address"
                      value={address}
                      onChange={(e)=>{setAddress(e.target.value)}}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="submit"
                      class="btn btn-warning"
                      value="Add student"
                    />
                  </div>






                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddStudent;
