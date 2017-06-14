import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './LoginForm.css';
import logo from '../../App/logo.png'
import loginFormStyle from './LoginForm.css.js';
import CommanderContent from "../CommanderContent/CommanderContent";

function LoginForm(props) {
    const {username, password, login, usernameChange, passwordChange} = props;
    const isUserSawCommanderContent = localStorage.getItem("sawCommanderContent");

    return (
        <form className="login-form-container" onSubmit={(event) => login(username, password, event) }>
            <img className="login-logo" src={logo} alt="logo"/>
            <CommanderContent startOpen={!isUserSawCommanderContent}/>

            <Paper style={loginFormStyle.loginFormInputContainer} zDepth={2} rounded={false}>
                <div className="login-input-field-container">
                    <FontIcon className="material-icons" style={loginFormStyle.inputIcon}>account_circle</FontIcon>
                    <TextField
                        hintText="Username"
                        fullWidth={true}
                        underlineShow={false}
                        value={username}
                        onChange={(event, username) => usernameChange(username)}
                    />
                </div>
                <div className="login-input-field-container">
                    <FontIcon className="material-icons" style={loginFormStyle.inputIcon}>lock</FontIcon>
                    <TextField
                        hintText="Password"
                        type="password"
                        fullWidth={true}
                        underlineShow={false}
                        value={password}
                        onChange={(event, password) => passwordChange(password)}
                    />
                </div>
            </Paper>
            <RaisedButton type="submit" label="Login" secondary={true} fullWidth={true}
                          onTouchTap={() => login(username, password)}/>
            <div className="commander-warning-container">
                <span className="login-warning-message">Remember! always keep the rules of the kabam</span>
            </div>
        </form>
    );
}

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    login: PropTypes.func.isRequired,
    usernameChange: PropTypes.func.isRequired,
    passwordChange: PropTypes.func.isRequired,
};
LoginForm.defaultProps = {username: '', password: ''};

export default LoginForm;