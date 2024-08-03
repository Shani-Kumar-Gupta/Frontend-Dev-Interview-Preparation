import React from 'react';
class UserClass extends React.Component {
  // extends React.Component -> Will make React Know this is class based component
  // React.Component is a class which can be extended from other class to inherit somne properties and methods

  // every class based component has constructor which will receive the props
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {}
    }
    console.log(this.props.name + " Child Constructor called!");
  }

  async componentDidMount() {
    // To Make API Calls
    console.log(this.props.name + " Child component did mount");
    const data = await fetch('https://api.github.com/users/Shani-Kumar-Gupta');
    const json = await data.json();

    this.setState({
      userInfo: {...this.state.userInfo, ...json}
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + " Child component did update called!");
  }

  componentWillUnmount() {
    console.log(this.props.name + " Child component will unmount");
  }

  render() {
    // this method will return some piece of JSX to rendered on Browser
    const { name } = this.props;
    const { count, count2 } = this.state;
    console.log(this.props.name + " Child Render called!");
    return (
      <div className='userCard'>
        <h1>Name: {name}</h1>
        <h2>Location: {'Gurgaon'}</h2>
        <h3>count: {count}</h3>
        <h3>count2: {count2}</h3>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
            count2: this.state.count2 + 1
          });
        }}>Update Count</button>
      </div>
    )
  }
}

export default UserClass;