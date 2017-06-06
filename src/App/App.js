import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRoutes from './App.routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default function App() {
    return (
        <MuiThemeProvider>
            <AppRoutes/>
        </MuiThemeProvider>
    );
}