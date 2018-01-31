import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

class Header extends Component {

  render(){
    return(
      <AppBar
       title={<span>Meetup-React</span>}
       iconElementRight={<RaisedButton label="Login" backgroundColor= "White" href= "/login" />}
     />
    )
  }
}

export default Header
