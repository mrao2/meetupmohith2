import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col } from 'react-flexbox-grid'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';



class Dashboard extends Component {

  render() {


    return (
    	<div className="container-fluid">
        <div classname="bodyHeader">
          <h1>
  	    		Welcome to your Dashboard!
  	    	</h1>
  	    	<p>More Features coming soon!</p>


        </div>
    	</div>



    )
  }
}

export default Dashboard
