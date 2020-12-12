import React from 'react';
import axios from 'axios';

export default class adminLogin extends React.Component {
  state = {
    name: '',
    pass:''
  }

  // handleChange = event => {
  //   this.setState({ name: event.target.value,
  //   pass: event.target.value });
  // }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: this.state.name,
      password: this.state.pass
    };

    axios.post(`http://3.20.222.121:8080/TriviaAPI/admin_login`, user, {withCredentials:true})
      .then(res => {
        console.log("Hello");
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input type="text" name="username" onChange={(e) => this.setState({ name: e.target.value })} />
          </label>
          <label>
            password:
            <input type="text" name="password" onChange={(e) => this.setState({ pass: e.target.value })} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}