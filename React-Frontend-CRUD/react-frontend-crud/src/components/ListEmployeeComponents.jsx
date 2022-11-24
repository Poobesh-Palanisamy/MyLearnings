import React, { Component } from 'react';
import EmployeeServices from '../Services/EmployeeServices';


export default class ListEmployeeComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeServices.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        });
    }
    addEmployee(){
        // const history=useNavigate();
    this.addEmployee.push.histor('/add-employee');
    }
    render() {  
        return (
            <div>
                <h2 className="text-centre">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                    </div>
                    <div className="row">
                    <table className="table table-striped table-bordered"> 
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th> Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstname}</td>
                                            <td>{employee.lastname}</td>
                                            <td>{employee.emailId}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

