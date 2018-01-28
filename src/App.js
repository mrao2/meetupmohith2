import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

//Components
import Homepage from './Components/pages/Homepage'
import Header from './Components/header'
import Login from './Components/pages/login'
import Dashboard from './Components/pages/dashboard'
import Create from './Components/pages/create'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />

          <Router>
            <div>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/Dashboard' component={Dashboard} />
              <Route exact path='/Create' component={Create} />
            </div>
          </Router>

          

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
