import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignedOutLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink to="/signin">Log In</NavLink>
                </li>
            </ul>
        )
    }
}
