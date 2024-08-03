import React from 'react';
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Me</h1>
//       <hr />
//       <User name={'Shani (function)'} />
//       <hr />
//       <UserClass name={'Abhinav (class)'} />
//     </div>
//   )
// }
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Constructor Parent called!");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Render parent called!");
    return (
      <div className='about'>
        <User />
        <UserClass name={'Shani K.'} />
        {/* <UserClass name={'Elon M.'} /> */}
      </div>
    )
  }
}
export default About;

/* Wrong Answer
Constructor Parent called!
Render parent called!
Shani K. Child Constructor called!
Shani K. Child Render called!
Shani K. Child component did mount
Elon M. Child Constructor called!
Elon M. Child Render called!
Elon M. Child component did mount
Parent component did mount
*/

/* Correct Answer: React Optimizing
Constructor Parent called!
Render parent called!

  Shani K. Child Constructor called!
  Shani K. Child Render called!

  Elon M. Child Constructor called!
  Elon M. Child Render called!

  <DOM UPDATES - IN SINGLE BATCH>

Shani K. Child component did mount
Elon M. Child component did mount

Parent component did mount
*/