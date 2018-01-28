import React, { Component } from 'react'
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

/*var con = mysql.createConnection({
  host: "localhost",
  user: "meetupapp",
  password: "pass",
  database: "meetupapp",
});*/

class Create extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
  }


  change = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   });
  };

  onSubmit = (e) => {
    console.log(this.state)
    fetch('/users', {
         method: 'POST',
         data: {
           userName: this.state.userName,
           password: this.state.password,
         }
       })
       .then(function(response) {
         return response.json()
       }).then(function(body) {
         console.log(body);
       });

    this.setState({
      userName: '',
      password: '',
    });
  };

  render() {
    return (
    	<form>
      <TextField
         name="userName"
         hintText="Username"
         floatingLabelText="Username"
         value={this.state.userName}
         onChange={e => this.change(e)}
         floatingLabelFixed
       />
     <br />
     <TextField
         name="password"
         hintText="Password"
         floatingLabelText="Password"
         value={this.state.password}
         onChange={e => this.change(e)}

         floatingLabelFixed
       />
       <br />
       <TextField
        disabled={true}
           name="apiKey"
           floatingLabelText="Api Key"
           value={this.state.apiKey}
           onChange={e => this.change(e)}
           floatingLabelFixed
         />
         <br />
       <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>



    )
  }
}

export default Create
