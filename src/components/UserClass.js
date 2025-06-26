import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Karan arjun",
        location: "Bollywood",
        email: "hello@gmail.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    //const { name, location, email } = this.props;
    const { name, location, blog } = this.state.userInfo;
    return (
      <div className="border-amber-950 border shadow-2xl w-2xs h-60 p-2 m-2">
        <h1 className="font-bold">Count: {this.state.count}</h1>
        <button
          className="border px-2 my-2"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment count
        </button>
        <h1>{name}</h1>
        <h3>{location}</h3>
        <h3>{blog}</h3>
        <UserContext.Consumer>
          {(data) => <h1>{data.loggedInUser.name}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
