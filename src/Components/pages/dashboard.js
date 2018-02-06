import React, { Component } from 'react'

import {getNames} from '../../bootleg'


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




var psuedoList= ["Abhi Nemani, ", "Brandon , ", "Matthew Bauer, ", "Nikhil Nambiar, ", "Nathaniel Stripeik, ", "Chanda , ", "Bush , ", "Tim McAndrew, ", "Joshua Veal, ", "Mona , ", "Mike Schmidt, ", "Kevin Kaifer, ", "Mohith Rao, ", "Nehemiah Dacres"]
export default class Dashboard extends Component {
  constructor() {
    super()
    this.state= {
      attendees: [],
    }

  }

  render() {


    return (
    	<div className="container-fluid">
        <div className="bodyHeader">
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
                • What we will do
                  We Design and Engineer technical solutions to civic problems.
                • What to bring
                  Maybe your laptop.
                <br />
                RSVPs:
                <br />
                <Divider />
                <p>{psuedoList}</p>
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
                • What we will do:
                  We Design and Engineer technical solutions to civic problems.
                • What to bring:
                  Maybe your laptop.
                <br />
                RSVPs:
                <br />
                <Divider />

                </CardText>
              </Card>
            </Col>
          </Row>

        </div>
    	</div>



    )
  }
}
