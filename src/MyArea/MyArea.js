import React, {Component} from 'react';
import {Redirect,} from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';

import "./MyArea.css";
import Navbar from '../Navbar/Navbar';
import MyAreaProxy from "./MyArea.proxy";
import myAreaStyle from "./MyArea.css.js";
import MyAreaForm from "./MyAreaForm/MyAreaForm";
import LoginSesssionService from "../Login/LoginSession.service";

const SessionService = new LoginSesssionService();

export default class MyArea extends Component {
    state = {
        loaded: false,
        openSnackbar: false,
        snackbarMessage: '',
        snackbarIsError: false,
        redirectToLoginErr: null,
        userData: {comment: ""}
    };

    async componentDidMount() {
        try {
            const userData = await MyAreaProxy.get();
            this.setState({userData, loaded: true});
        }
        catch (err) {
            if (err.message === "Not a valid authorization header") {
                SessionService.removeLoggedUser();
                this.setState({redirectToLoginErr: "Not a valid authorization header"})
            } else {
                this.setState({userData: {}, loaded: true});
            }
        }
    }

    render() {
        const {redirectToLoginErr, loaded, userData, openSnackbar, snackbarMessage, snackbarIsError} = this.state;

        if(redirectToLoginErr){
            return (<Redirect to={{pathname: '/login', state: {redirectToLoginErr, from: "/"}}}/>)
        }

        return (
            <div className="my-area page-container">
                <Navbar {...this.props}/>

                <div className="my-area-container">
                    <h2 className="my-area-header">My Area</h2>
                    {
                        loaded ?
                            <MyAreaForm
                                userDataChange={(userData) => this.setState({userData})}
                                saveChanges={(userData) => this.saveChanges(userData)}
                                userData={userData}
                            />
                            :
                            <LinearProgress mode="indeterminate"/>
                    }
                    <Snackbar
                        open={openSnackbar}
                        message={snackbarMessage}
                        bodyStyle={snackbarIsError ? myAreaStyle.snackbarIsError : myAreaStyle.snackbarIsntError}
                        autoHideDuration={100000}
                        onRequestClose={(reason) => this.handleSnackbarRequestClose(reason)}
                    />
                </div>
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

    async saveChanges({sender, userData}){
        if (sender) {
            sender.preventDefault();
        }

        try {
            await MyAreaProxy.setComment(userData.comment);
            this.triggerSnackbar("Updated comment successfully!", false);
        }
        catch (err) {
            console.error(err);
            this.triggerSnackbar("Error on updating the comment", true);
        }
    }
}
