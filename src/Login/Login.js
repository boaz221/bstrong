import _ from 'lodash';
import Paper from 'material-ui/Paper';
import React, {Component} from 'react';
import {Redirect,} from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Login.css';
import logo from '../App/logo.png'
import loginStyle from './Login.css.js';
import loginProxy from './Login.proxy.js';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        openSnackbar: false,
        snackbarMessage: '',
        snackbarIsError: false,
        redirectBack: false
    };

    render() {
        let {username, password, openSnackbar, snackbarMessage, snackbarIsError, redirectBack} = this.state;

        return (
            <div className="login page-container">
                redirectBack ?
                <Redirect to={_.get(this.props, 'location.state.from') || "/"}/>
                :
                <form className="login-form-container" onSubmit={(event) => this.login(username, password, event) }>
                    <img className="login-logo" src={logo} alt="logo"/>

                    <Paper style={loginStyle.loginFormInputContainer} zDepth={2} rounded={false}>
                        <div className="login-input-field-container">
                            <FontIcon className="material-icons" style={loginStyle.inputIcon}>account_circle</FontIcon>
                            <TextField
                                hintText="Username"
                                fullWidth={true}
                                underlineShow={false}
                                value={username}
                                onChange={(event, username) => this.setState({username})}
                            />
                        </div>
                        <div className="login-input-field-container">
                            <FontIcon className="material-icons" style={loginStyle.inputIcon}>lock</FontIcon>
                            <TextField
                                hintText="Password"
                                type="password"
                                fullWidth={true}
                                underlineShow={false}
                                value={password}
                                onChange={(event, password) => this.setState({password})}
                            />
                        </div>
                    </Paper>
                    <RaisedButton type="submit" label="Login" secondary={true} fullWidth={true}
                                  onTouchTap={() => this.login(username, password)}/>
                </form>
                <Snackbar
                    open={openSnackbar}
                    message={snackbarMessage}
                    bodyStyle={snackbarIsError ? loginStyle.snackbarIsError : loginStyle.snackbarIsntError}
                    autoHideDuration={100000}
                    onRequestClose={(reason) => this.handleSnackbarRequestClose(reason)}
                />
            </div>
        );
    }

    handleSnackbarRequestClose(reason) {
        if (reason === "timeout") {
            this.setState({openSnackbar: false})
        }
    }

    triggerSnackbar(message, isError) {
        this.setState({openSnackbar: false}, () => {
            this.setState({openSnackbar: true, snackbarMessage: message, snackbarIsError: isError});
        });
    }

    async login(username, password, sender) {
        if (sender) {
            sender.preventDefault();
        }

        if (username && password) {
            try {
                const loginResponse = await loginProxy.login(username, password);
                this.triggerSnackbar(!loginResponse ? "Wrong username or password!" : "Logged in successfully!", !loginResponse);
                this.setState({redirectBack: true});
            }
            catch (err) {
                this.triggerSnackbar(err.message || err, true);
            }
        } else {
            this.triggerSnackbar("Username and password are required!", true);
        }
    }
}