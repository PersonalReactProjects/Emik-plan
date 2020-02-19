import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SignedInLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/create">New Project</NavLink></li>
                <li><NavLink to="/">Log Out</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">EL</NavLink></li>
            </ul>
        )
    }
}
