import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: 'Murilo',
        repos: 30,
        fallowers: 10,
        fallowing: 5,
      },
      repos: [{
        name: 'Meu Repo',
        link: 'google.com',
      }],
      starred: [{
        name: 'Meu Fav',
        link: 'youtube.com',
      }],
    };
  }
  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}
export default App;
