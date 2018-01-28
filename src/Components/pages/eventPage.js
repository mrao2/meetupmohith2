import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Snackbar from 'material-ui/Snackbar';
import results from './results';



var multiNames = []
class eventPage extends Component {
  constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this);
      this.getResults = this.getResults.bind(this);

      this.state = {
           open: false,
           firstName: '',
           lastName: '',
           allNames: [],
         };

       };
       change = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });

       };
       onSubmit = () => {
         const fullName = `${this.state.firstName} ${this.state.lastName}`
         const allNames= this.state.allNames
         console.log(fullName)
         multiNames.push(fullName)
         console.log(allNames)


         this.setState({
           open: true,
           firstName: '',
           lastName: '',

         });
       };

       handleRequestClose = () => {
         this.setState({
           open: false,
         });
       };
      getResults = () => {
        this.setState({
          allNames:multiNames
        })

      //  return this.allNames;

      };
  render() {
    return (

    	<div className="container-fluid">

	    	<h1>
         Login to your event!
	    	</h1>

        <br/>

         <Row>
         <div className='form'>
         <Col mdOffset={1} xs={12}>
         <Paper zDepth={2}>
         <TextField
             name="firstName"
             hintText="First name"
             floatingLabelText="First name"
             value={this.state.firstName}
             onChange={e => this.change(e)}
             floatingLabelFixed
           />
          <br/>
          <TextField
            name="lastName"
            hintText="Last Name"
            floatingLabelText="Last Name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <br/>
          <Col xsOffset={2} xs={2}>
          <br/>
          <RaisedButton label="Login"  backgroundColor="darkGrey" onClick={() => this.onSubmit()}/>



          <Snackbar
         open={this.state.open}
         message="Thank you for signing in!"
         autoHideDuration={4000}
         onRequestClose={this.handleRequestClose}
       />

          </Col>
        </Paper>
        </Col>
         </div>

         <div className='results'>
         <Col mdOffset={2} xs={12}>
         <RaisedButton label='Get results'  backgroundColor="darkGrey"  onClick={this.getResults} />
         <Col lg={12}>
          <Paper>
            <h4>List of people who came: </h4>

            <h3>
              {JSON.stringify(this.state.allNames, null, 2)}
            </h3>
          </Paper>
          </Col>
          </Col>

         </div>
         </Row>
    	</div>



    )
  }
}

export default eventPage
