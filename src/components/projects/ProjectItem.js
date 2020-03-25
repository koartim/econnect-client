import React from 'react'

class ProjectItem extends React.Component {

    state = {
        projects: this.props
    }

    render() {
        return (
            <div>
                <h1>Project Item</h1>
            </div>
        )
    }
}

export default ProjectItem
