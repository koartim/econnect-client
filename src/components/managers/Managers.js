import React from 'react'
import ManagerItem from './ManagerItem';

class Managers extends React.Component {

    state = {
        managers: []
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/managers")
            .then(rsp => rsp.json())
            .then(data => {
                this.setState({
                    managers: data.managers
                })
            })
    }


    render() {
        console.log(this.state.managers)
        return (
            <div>
               {this.state.managers.map(manager => (
                    <ManagerItem manager={manager}/>
               ))}
            </div>
        )
    }

    
}
export default Managers
