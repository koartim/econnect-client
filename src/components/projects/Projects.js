import React from 'react'
import ProjectItem from './ProjectItem';

class Projects extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/projects")
            .then(rsp => rsp.json())
            .then(data => {
                this.setState({
                    projects: data.projects
                })
            })
    }

render() {
    console.log(this.state.projects)
    return (
        <div>
            {this.state.projects.map(project => (
                <ProjectItem project={project}/>
            ))}
        </div>
    )
  }
}

    

export default Projects
