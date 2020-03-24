import React from 'react';
import Employees from './Employees';


class App extends React.Component {


  state = {
    employees: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/v1/employees')
    .then(rsp => rsp.json())
    .then(data => {
      this.setState({
        employees: data.employeeDTOS
      })
    })
  }
  render() {
    return(
      <div>
        {this.state.employees.map(emp => {
          return <h1>{emp.firstName}</h1>
        })}
      </div>
    )
  }
}
export default App