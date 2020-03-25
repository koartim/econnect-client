import React, { Component } from 'react'

class ManagerItem extends Component {

    state = {
        managers: this.props
    }

    render() {
        return (
            <div>
               <h1>Managers</h1> 
            </div>
        )
    }
}

export default ManagerItem
