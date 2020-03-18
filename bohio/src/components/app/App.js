import React from 'react';
import Login from '../login/login';
import Register from '../register/register';
import Dashboard from '../dashboard/dashboard';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: {
      main: '#f7e393'
    },
    secondary: {
      main: '#F2CB30'
    },
  },
  overrides : {
    MuiFormLabel : {
      root : {
        color: 'darkgrey',
      }
    },

    MuiOutlinedInput: {
      notchedOutline : {
        borderColor: '#43D982',
      }
    },

    MuiInputBase: {
      input : {
        color: 'wheat'
      }
    },
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen : 'login',
      isLoggingIn : false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.setState({ isLoggingIn : true});
    setTimeout(
      function () {
        this.setState({currentScreen : 'dashboard'});
      }.bind(this), 3000);
  }

  render() {
    var currentScreen;
    if (this.state.currentScreen == 'login') {
      currentScreen = (
        <Login
          onSubmit={(e) => this.handleLogin(e)}
          isLoggingIn={this.state.isLoggingIn}/>
      );
    }
    if (this.state.currentScreen == 'register') currentScreen = <Register/>;
    if (this.state.currentScreen == 'dashboard') currentScreen = <Dashboard/>;
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          {currentScreen}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
