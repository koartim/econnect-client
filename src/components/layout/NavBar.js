import React from 'react'
import PropTypes from 'prop-types';

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

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default NavBar
