import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result =await axios.get("http://localhost:8080/api/v1/employees");
        setUsers(result.data);
    }
    return (
        <div className="container">
            <div className="py-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users,index)=>(
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{users.firstname}</td>
                            <td>{users.lastname}</td>
                            <td>{users.emailId}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <button className="btn btn-outline-primary mx-2">Edit</button>
                                <button className="btn btn-danger mx-2">delete</button>
                                
                                </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
