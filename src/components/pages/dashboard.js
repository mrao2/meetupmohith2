import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col } from 'react-flexbox-grid'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ContentSend from 'material-ui/svg-icons/content/send';


class Dashboard extends Component {

  render() {
    

    return (
    	<div className="container-fluid">
        <div classname="bodyHeader">
            <h1>
    	    		Welcome to your Dashboard!
    	    	</h1>
    	    	<p>
              "Please choose your organization and event to get started."
            </p>
        </div>
        <div classname="orgList">
          <Row>
          <Col sm={2} lg={4}>
          <Paper zDepth={2}>
          <List>
          <Subheader>Events</Subheader>
            <ListItem primaryText= "OpenSTL" href= "/results" rightIcon={<IconButton href="/eventPage"><ContentSend href="/eventPage" /></IconButton>}  />
            <ListItem primaryText="Org 2"  />
            <ListItem primaryText="Org 3"  />
            <ListItem primaryText="Org 4"  />
          </List>
          </Paper>
          </Col>
          </Row>
        </div>


    	</div>



    )
  }
}

export default Dashboard
