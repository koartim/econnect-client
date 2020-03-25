import React from 'react';
import NavBar from './components/layout/NavBar';
import Employees from './components/employees/Employees';
import Managers from './components/managers/Managers';
import Projects from './components/projects/Projects';

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <NavBar title="e-connect" icon="fas fa-project-diagram" />
        <div className="container">
          <Employees />
          <Managers />
          <Projects />
        </div>
      </div>
    )
  }
}
export default App