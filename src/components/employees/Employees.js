import React, { Component } from 'react'
import EmployeeItem from './EmployeeItem';
 
class Employees extends Component {

    state = {
        employees: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/employees")
            .then(rsp => rsp.json())
            .then(data => {
                this.setState({
                    employees: data.employees
                })
            })
    }

    render() {
        console.log(this.state.employees)
        return (
            <div>
                {this.state.employees.map(employee => (
                    <EmployeeItem employee={employee}/>
                ))}
            </div>
        )
    }
}

export default Employees
