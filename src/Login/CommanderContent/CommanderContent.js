import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import "./CommanderContent.css";
import commanderContentStyle from "./CommanderContent.style.js";

class CommanderContent extends Component {
    state = {
        isOpen: false
    };

    componentWillMount() {
        if (this.props.startOpen) {
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
                    bodyStyle={commanderContentStyle.body}
                    modal={false}
                    open={this.state.isOpen}
                    onRequestClose={() => this.closeDialog()}>
                    <p className="commander-content">
                        שלום לוחמים,
                        <br/>
                        <br/>
                        חלמתם, חשבתם שזה מדע בדיוני, אני כמפקד שלכם אומר, ניתן להפוך חלום למציאות. זה בידיים שלנו.
                        <br/>
                        <br/>
                        כפי שתואר לכם ביום העצמאות האחרון, צבא ארה"ב נמצא בישורת האחרונה לקראת סיום פיתוח חליפת
                        איירון-מן. חליפות לחימה חסינות ירי המשלבות כוח קינטי, נשיאת משאות כבדים ויכולות אחרות.
                        <br/>
                        <br/>
                        בשלב זה הצטיידות בחליפות אלו אינה באג'נדה הצה"לית. אני מאמין שאנחנו כיחידת חוד וכגוף הקומנדו
                        הטוב ביותר בצה"ל יכולים להשפיע על ההחלטה, ואף להוות יחידת הפיילוט הראשונה בצבא.
                        <br/>
                        <br/>
                        באופן לא רשמי, קיבלנו את אישורו של המח"ט ומאו"ג והם מנסים להשפיע בדרגים אצלם. על מנת להשפיע
                        יזמתי באופן פרטי הקמת הפורטל הנ"ל, במסגרתו אני מבקש מכל לוחם לעבור, לראות, לבחון, ולחקור את כלל
                        המידע הקיים שהונגש לכם (באדיבות אדווה) אודות האמל"ח הזה. באזור האישי אתם מתבקשים לענות על מספר
                        שאלות שיהיו בבחינת מהו הערך המוסף של אמל"ח מסוג זה? אילו שיפורים הייתם ממליצים להכניס לטובת
                        התאמתו לסוג הלחימה שלנו?
                        <br/>
                        <br/>
                        <span className="commander-warning">שימו לב:</span>
                        <br/>
                        <br/>
                        מדובר בפורטל שניתן להכניס אליו חומר בלתי מסווג <b>בלבד&nbsp;</b>
                        ולכן יש לשמור על רמת הסיווג, אין להכניס דוגמאות קונקרטיות, אין להשאיר שום פרט מזהה - לכל חייל ינתן שם משתמש וסיסמא אישית וכך נוכל לדעת מי הכותב.
                        יש להשמע להוראות ב"ש כפי שהעביר לכם קב"מ היחידה.
                    </p>
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
