import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import commanderContentStyle from "./CommanderContent.css";

class CommanderContent extends Component {
    state = {
        isOpen: false
    };

    componentWillMount(){
        if(this.props.startOpen){
            this.openDialog();
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="אישור"
                primary={true}
                onTouchTap={() => this.closeDialog()}
            />
        ];

        return (
            <div className="commander-content-container">
                <RaisedButton label="דבר המפקד" fullWidth={true}
                              onTouchTap={() => this.openDialog()}/>
                <Dialog
                    title="דבר המפקד"
                    actions={actions}
                    actionsContainerStyle={commanderContentStyle.actions}
                    style={commanderContentStyle.dialog}
                    modal={false}
                    open={this.state.isOpen}
                    onRequestClose={() => this.closeDialog()}
                >
                    אני המפקד הכי טוב!
                </Dialog>
            </div>
        );
    }

    closeDialog() {
        this.setState({isOpen: false});
    }

    openDialog() {
        this.setState({isOpen: true});
        localStorage.setItem("sawCommanderContent", true);
    }
}

CommanderContent.propTypes = {startOpen: PropTypes.bool};
CommanderContent.defaultProps = {startOpen: false};

export default CommanderContent;
