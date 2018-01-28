import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'


class Header extends Component {
  render() {
    return (
    	<header>

	    	<div className="logo">
	    		<a href="/">LOGO</a>
	    	</div>


        <nav>

          <RaisedButton label="Dashboard"  backgroundColor="Yellow" href="/Dashboard"  />
          <RaisedButton label="Login"  backgroundColor="Yellow" href="/Login"  />


        </nav>



    	</header>
    )
  }
}

export default Header
