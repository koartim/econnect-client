import React from 'react'

class EmployeeItem extends React.Component {

    render() {
   
        return (
            <div className="card text-center">
                <h1>Employees</h1>
            <div>
                <h3>{this.props.employee.firstName} </h3>
            </div>
            </div>
        )
    }
}

export default EmployeeItem
