import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function AddUser() {
        constructor(props)   {
            super(props);
            this.state = {
                fname: "",
                lname: "",
                email: "",
            };
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleSubmit(e); {
            e.preventDefault();
            const { fname, lname, email } = this.state;
            console.log(fname, lname, email);
            fetch("http://localhost:8080/employees", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "employees");
                });
        }
        
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-centre m-4">Add Employee</h2>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlfor="Name" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your first_name"
                                        name="first_Name"
                                        value={fname}
                                        onChange={fname} />
                                </div>
                                <div className="mb-3">
                                    <label htmlfor="Name" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your last_name"
                                        name="last_Name"
                                        value={lname}
                                        onChange={lname} />
                                </div>
                                <div className="mb-3">
                                    <label htmlfor="Name" className="form-label">
                                        Email Id
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your email_id"
                                        name="email"
                                        value={email}
                                        onChange={email} />
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                                <button type="submit" className="btn btn-outline-danger">Cancel</button>
                            </form>
                        </div>
                    </div>

                </div>
            );
        }
    

