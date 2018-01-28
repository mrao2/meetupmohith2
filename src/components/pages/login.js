import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class login extends Component {
  render() {
      // const style = {
      //   height: 100,
      //   width: 200,
      //   margin: 5,
      //   align: 'center',
      //   textAlign: 'center',
      //   display: 'inline-block',
      //   marginRight: 20
      // };
      const buttonStyle = {


      }
    return (
                  <div>
      <Grid fluid>
        <Row>
          <Col xsOffset={2} xs={8}>
              <Paper zDepth={2}>
                <TextField hintText="Username" underlineShow={false} id="user" />
                <Divider />
              </Paper>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={2} xs={8}>
            <Paper zDepth={2}>
                <TextField hintText="Password" underlineShow={false} id="pass" type="password" />
                <Divider />
                </Paper>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={8}>
          <Paper zDepth={2}>
                <RaisedButton label="Login"  backgroundColor="darkGrey" href="/Dashboard" style={buttonStyle}   />
                </Paper>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={2} xs={8}>
              <br/>
                No account no problem! <a href="/Create">Create One</a>
          </Col>
        </Row>
      </Grid>
            </div>


    )
  }
}

export default login
