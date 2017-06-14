import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
                label="OK"
                primary={true}
                onTouchTap={() => this.closeDialog()}
            />
        ];

        return (
            <div className="commander-content-container">
                <RaisedButton label="Commander Content" fullWidth={true}
                              onTouchTap={() => this.openDialog()}/>
                <Dialog
                    title="Commander Content"
                    actions={actions}
                    modal={false}
                    open={this.state.isOpen}
                    onRequestClose={() => this.closeDialog()}
                >
                    Commander Content
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
