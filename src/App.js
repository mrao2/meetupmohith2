import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Components
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Homepage from './components/pages/homepage'
import Contacts from './components/pages/contacts'
import Login from './components/pages/login'
import Dashboard from './components/pages/dashboard'
import Create from './components/pages/create'
import results from './components/pages/results'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>

      <Router>
      <div className="App">

      <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/Contacts' component={Contacts} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/Create' component={Create} />
        <Route exact path='/Results' component={results} />

      <Footer />

      </div>

      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
