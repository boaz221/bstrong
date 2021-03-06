import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './LoginForm.css';
import loginFormStyle from './LoginForm.css.js';
import CommanderContent from "../CommanderContent/CommanderContent";

function LoginForm(props) {
    const {username, password, login, usernameChange, passwordChange} = props;
    const isUserSawCommanderContent = localStorage.getItem("sawCommanderContent");

    return (
        <form className="login-form-container" onSubmit={(event) => login(username, password, event) }>
            <CommanderContent startOpen={!isUserSawCommanderContent}/>

            <div className="inputs-and-buttons-container">
                <Paper style={loginFormStyle.loginFormInputContainer} zDepth={2} rounded={false}>
                    <div className="login-input-field-container">
                        <FontIcon className="material-icons" style={loginFormStyle.inputIcon}>account_circle</FontIcon>
                        <TextField
                            hintText="שם משתמש"
                            fullWidth={true}
                            underlineShow={false}
                            value={username}
                            onChange={(event, username) => usernameChange(username)}
                        />
                    </div>
                    <div className="login-input-field-container">
                        <FontIcon className="material-icons" style={loginFormStyle.inputIcon}>lock</FontIcon>
                        <TextField
                            hintText="סיסמא"
                            type="password"
                            fullWidth={true}
                            underlineShow={false}
                            value={password}
                            onChange={(event, password) => passwordChange(password)}
                        />
                    </div>
                </Paper>
                <RaisedButton type="submit" label="התחבר" secondary={true} fullWidth={true}
                              onTouchTap={() => login(username, password)}/>
            </div>
            <div className="commander-warning-container">
                <span className="login-warning-message">זכור! נא לפעול לי הוראות בטחון שדה!</span>
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