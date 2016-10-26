import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Theme from './settings/Theme';
import './App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
    <div>
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
