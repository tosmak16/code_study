import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './components/UsersList';


const baseUrl = process.env.REACT_APP_USERS_SERVICE_URL

class App extends Component {
  constructor() {
    super();
      this.state = {
    users: []
  };
  }
  componentDidMount() {
  this.getUsers();
};
  getUsers = async() => {
    const res=await axios.get(`${baseUrl}/users`)
      this.setState({ users: res.data.data.users });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br/>
            <h1>Code Study</h1>
            <hr/><br/>
              <UsersList users={this.state.users}/>
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);