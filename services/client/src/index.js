import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';


const baseUrl = process.env.REACT_APP_USERS_SERVICE_URL

class App extends Component {
  constructor() {
    super();
      this.state = {
    users: [],
    username: '',
    email: ''
  };
  }
  componentDidMount() {
  this.getUsers();
};
  getUsers = async() => {
    const res=await axios.get(`${baseUrl}/users`)
      this.setState({ users: res.data.data.users });
  }

  addUser = async (event) => {
      event.preventDefault();
      const {username, email} = this.state;
      const data={
        'username': username,
          'email': email
      }
      await axios.post(`${baseUrl}/users`, data )
      this.getUsers()
      this.setState({ username: '', email: '' });
  };
  handleChange = (event)=> {
  const obj = {};
  obj[event.target.name] = event.target.value;
  this.setState(obj)
};
  render() {
    document.title='index';
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br/>
            <h1>Code Study</h1>
            <hr/><br/>
              <AddUser
                  addUser={this.addUser}
                  username={this.state.username}
                  email={this.state.email}
                  handleChange={this.handleChange}
              />
              <br/>
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