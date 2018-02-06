import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';
import Snackbar from 'material-ui/Snackbar';

class login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    userName: '',
    password: '',
    open: false
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state);

    let userName = this.state.userName.trim();
    let password = this.state.password.trim();

    if (!userName || !password) {
      return <p>"Hmm..... You're missing something!"</p>;
    }
    this.handleLogin({
      userName: userName,
      password: password,
    });

    this.setState({
      userName: '',
      password: '',

    });
  }

  handleLogin(entry) {
   axios.post('http://localhost:3001/api/login', entry)
   .then(res => {
   this.setState({ data: res });
   //console.log(this.state)
     if (this.state.data.status == 200){
        console.log("Redirecting.......")
        this.props.history.push('/Dashboard')

     }
   })
   .catch(err => {
      this.setState({
        open: true,

      })
   })
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

    return (
                  <div>
      <Grid fluid>
        <Row>
          <Col xsOffset={2} xs={8}>
            <Paper zDepth={2}>
              <TextField
              name="userName"
              hintText="Username"
              underlineShow={false}
              value={this.state.userName}
              onChange={this.handleChange}

              />
              <Divider />
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={2} xs={8}>
            <Paper zDepth={2}>
              <TextField
              name="password"
              hintText="Password"
              underlineShow={false}
              type="password"
              value={this.state.password}
              onChange={this.handleChange}

              />
              <Divider />
              </Paper>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={8}>
            <Paper zDepth={2}>
              <RaisedButton label="Login"  backgroundColor="darkGrey" onClick={(event) => this.handleSubmit(event)} primary />
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
      <Snackbar
         open={this.state.open}
         message="Login failed! Did you enter something wrong?"
         autoHideDuration={4000}
         onRequestClose={this.handleRequestClose}
       />
            </div>


    )
  }
}

export default login
