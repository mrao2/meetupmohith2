import React, { Component } from 'react'
import axios from 'axios';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Snackbar from 'material-ui/Snackbar';

class Create extends Component {
  constructor(props) {
  super(props);
  this.state = {
    firstName: '',
    userName: '',
    password: '',
    apiKey: '',
    open: false,
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});

  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    let firstName = this.state.firstName.trim();
    let userName = this.state.userName.trim();
    let password = this.state.password.trim();
    let apiKey = this.state.apiKey;
    if (!firstName || !userName || !password || !apiKey) {
    return <p>"Hmm..... You're missing something!"</p>;
    }
    this.handleCreateUser({
      firstName: firstName,
      userName: userName,
      password: password,
      apiKey: apiKey,
    });

    this.setState({
      open: true,
      firstName: '',
      userName: '',
      password: '',
      apiKey: '',
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleCreateUser(entry) {
   axios.post('http://localhost:3001/api/users', entry)
   .then(res => {
   this.setState({ data: res });
   })
   .catch(err => {
   console.error(err);
   });
  }

  render() {
    return (
      <div className="createPage">
        <h1>Create an Account!</h1>
        <p>This is an account for people who are either event hosts or admins of an orgainzation.</p>

      	<form>

        <Row>
          <Col mdOffset={0} xs={12}>
          <Paper>
            <TextField
              name="firstName"
              hintText="First name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              name="userName"
              hintText="Username"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              name="password"
              hintText="Password"
              value={this.state.password}
              onChange={this.handleChange}

            />
            <br />
            <TextField
              name="apiKey"
              hintText="APIKey"
              value={this.state.apiKey}
              onChange={this.handleChange}

            />
            <br />

            <RaisedButton label="Submit" onClick={(event) => this.handleSubmit(event)} primary />

            <Snackbar
              open={this.state.open}
              message="Thank you, $(firstName) for singing up!"
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
          </Paper>
          </Col>
        </Row>

        </form>
      </div>


    )
  }
}

export default Create
