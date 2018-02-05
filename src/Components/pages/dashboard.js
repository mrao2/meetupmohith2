import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Grid, Row, Col } from 'react-flexbox-grid'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class Dashboard extends Component {

  render() {


    return (
    	<div className="container-fluid">
        <div classname="bodyHeader">
          <h1>
  	    		Welcome to your Dashboard!
  	    	</h1>
          <Row>
            <Col  xs={3}>
      	    	<Paper>
                <List>
                  <ListItem primaryText= "OpenSTL"  />
                  <ListItem primaryText="St.Louis Game Dev Co-Op"  />

                </List>
              </Paper>
            </Col>
            <Col mdOffset={1} xs={6}>
              <Card>
                <CardHeader
                 title="Bi Weekly Hack Night"
                 subtitle="2/13/2018"
                 actAsExpander={true}
                 showExpandableButton={true}
                />
                <CardActions>
                 <FlatButton label="Sign In" href="/eventPage" />

                </CardActions>
                <CardText expandable={true}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                 Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                 Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                 <br />
                 <FlatButton label="Get Attendance" />
                </CardText>
              </Card>
            </Col>

          </Row>
          <br />
          <Row>
            <Col mdOffset={4} xs={6}>
              <Card>
                <CardHeader
                 title="Monthly Hack Night"
                 subtitle="2/23/2018"
                 actAsExpander={true}
                 showExpandableButton={true}
                />
                <CardActions>
                 <FlatButton label="Sign In" href="/eventPage" disabled={true} />

                </CardActions>
                <CardText expandable={true}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                 Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                 Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                 <br />
                 <FlatButton label="Get Attendance" disabled={true} />
                </CardText>
              </Card>
            </Col>
          </Row>

        </div>
    	</div>



    )
  }
}

export default Dashboard
