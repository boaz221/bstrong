import _ from 'lodash';
import React, {Component} from 'react';
import {Redirect,} from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar';

import './Login.css';
import loginStyle from './Login.css.js';
import loginProxy from './Login.proxy.js';
import LoginForm from '../LoginForm/LoginForm';

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
                {
                    redirectBack ?
                        <Redirect to={_.get(this.props, 'location.state.from') || "/"}/>
                        :
                        <LoginForm passwordChange={(password) => this.setState({password})}
                                   usernameChange={(username) => this.setState({username})}
                                   login={(...args) => this.login(...args)}
                                   username={username}
                                   password={password}/>

                }
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

    triggerSnackbar(message, isError, otherStateArgs) {
        this.setState({openSnackbar: false}, () => {
            this.setState({openSnackbar: true, snackbarMessage: message, snackbarIsError: isError, ...otherStateArgs});
        });
    }

    async login(username, password, sender) {
        if (sender) {
            sender.preventDefault();
        }

        if (username && password) {
            try {
                const loginResponse = await loginProxy.login(username, password);
                if(loginResponse.ok){
                    this.setState({openSnackbar: false, redirectBack: true});
                }else{
                    this.triggerSnackbar("Wrong username or password!", true);
                }
            }
            catch (err) {
                this.triggerSnackbar(err.message || err, true);
            }
        } else {
            this.triggerSnackbar("Username and password are required!", true);
        }
    }
}