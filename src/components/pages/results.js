import React, { Component } from 'react'
import eventPage from './eventPage'
import RaisedButton from "material-ui/RaisedButton";

class Result extends Component {


  render() {
//     var meetup = require('meetup-api')({
//        key: '5f32d183226637a717a283f397e65'
//     });

//     var first= '';
//     const rsvp = meetup.getRSVPs({
//        event_id: 246436583,
//        urlname: 'banodejs'
//     },
//     function(err, resp) {
//        if (err) {
//            console.error('Found meetup error', err);
//        }
//        else{
//        //console.log(JSON.stringify(resp, null, 2));

//        const namesOfPeopleWhoRSVPD = resp.results
//         .map(rsvp => rsvp.member.name)
//        console.log(namesOfPeopleWhoRSVPD);

//          const nameOfEvent = resp.results
//             .map(rsvp => rsvp.event.name)
//         first = nameOfEvent[0]
//         console.log(first);
//         return first;
//       }

//     }

//   );
// const allNames = this.props.allNames


    return (
      <div>

        <h1>
        Results for Event: first

        </h1>


      </div>

    )
  }
}

export default Result
