import React from 'react'

const NavBar = (props) => {

    const { icon, title } = props

    return (
        <nav className="navbar bg-primary">
            <h1>
            <i className={icon}>{title}</i>
            </h1>
        </nav>
    )
}

export default NavBar
