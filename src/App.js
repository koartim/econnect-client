import React, { Fragment } from 'react';
import Employees from './Employees';
import NavBar from './components/layout/NavBar';
import { Switch, Route } from 'react-router-dom';

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
      const { employees } = this.state
      console.log(employees)
    return(
      <div className="App">
        <NavBar title="e-connect" icon="fas fa-project-diagram" />
        <div className="container">
          <Switch>
            <Fragment>
              <Employees employees={employees}/>
            </Fragment>
          </Switch>
        </div>
      </div>
    )
  }
}
export default App