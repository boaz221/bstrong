import _ from 'lodash';
import React, {Component} from 'react';
import {Redirect,} from 'react-router-dom'

import "./Navbar.css";
import logo from '../App/logo.png'
import navbarImage from '../App/be-strong-suite.jpg'

export default class Navbar extends Component{
    state = {
        redirectTo: null
    };

    render() {
        const {redirectTo} = this.state;

        const currentRoute = _.get(this, 'props.location.pathname');

        if (redirectTo && currentRoute && redirectTo !== currentRoute) {
            return (
                <Redirect to={redirectTo}/>
            )
        }

        return (
            <div className="navbar-container">
                <div className="navbar-line-container">
                    <div className="navbar-logo-container" onClick={() => this.setState({redirectTo: "/"})}>
                        <img className="navbar-logo" src={logo} alt="logo"/>
                        <span className="navbar-logo-name">BStrong</span>
                    </div>
                    <div className="navbar-links-container">
                        <span className="navbar-link" onClick={() => this.setState({redirectTo: "/"})}>בית</span>
                        <span className="navbar-link" onClick={() => this.setState({redirectTo: "/my-area"})}>אזור אישי</span>
                    </div>
                </div>
                <div className="navbar-image-border">
                    <img className="navbar-border-image" src={navbarImage} alt="logo"/>
                </div>
            </div>
        );
    }
}