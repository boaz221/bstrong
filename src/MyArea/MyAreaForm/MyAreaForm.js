import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './MyAreaForm.css';
import myAreaFormStyle from './MyAreaForm.css.js';

function MyAreaForm(props) {
    const {userData, saveChanges, userDataChange} = props;

    return (
        <form className="user-data-form-container" onSubmit={(event) => saveChanges(userData, event) }>
            <Paper style={myAreaFormStyle.myAreaFormInputContainer} zDepth={2} rounded={false}>
                <div className="comment-input-field-container">
                    <label htmlFor="comment" className="my-area-form-input-label">Comment:</label>
                    <TextField
                        id="comment"
                        fullWidth={true}
                        multiLine={true}
                        underlineShow={true}
                        value={userData.comment || ""}
                        onChange={(event, comment) => {userData.comment = comment; userDataChange(userData)}}
                    />
                </div>
            </Paper>

            <RaisedButton type="submit" label="Save" secondary={true} fullWidth={true}
                          onTouchTap={() => saveChanges(userData)}/>
        </form>
    );
}

MyAreaForm.propTypes = {
    userData: PropTypes.object,
    saveChanges: PropTypes.func.isRequired,
    userDataChange: PropTypes.func.isRequired,
};
MyAreaForm.defaultProps = {userData: {comment: ""}};

export default MyAreaForm;