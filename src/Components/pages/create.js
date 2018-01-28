import React, { Component } from 'react'
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


class Create extends Component {
  render() {
    return (
      <div className="createPage">
        <h1>Create an Account!</h1>
        <p>This is an account for people who are either event hosts or admins of an orgainzation.</p>

      	<form>

          <TextField
            name="firstName"
            hintText="First name"

          />
          <br />
          <TextField
            name="userName"
            hintText="Username"

          />
          <br />
          <TextField
            name="password"
            hintText="Password"

          />
          <br />
          <TextField
            disabled={true}
            name="apiKey"
            hintText="APIKey"
          />
          <br />

          <RaisedButton label="Submit" primary />

        </form>
      </div>


    )
  }
}

export default Create
