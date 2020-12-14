import React, { Component } from 'react'
import './Navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <div>         
                <nav className="navbar navbar-dark">
                <a className="navbar-brand" href="#">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1013/1013446.svg" width="30" height="30" className="d-inline-block align-top spin" alt=""/>
                     Weather
                </a>
                </nav>
            </div>
        )
    }
}

export default Navigation
