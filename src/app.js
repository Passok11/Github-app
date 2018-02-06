import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax';
import AppContent from './components/app-content';

class App extends Component {
  static getGithubApiUrl(username, type) {
    const urlUser = username ? `/${username}` : '';
    const urlType = type ? `/${type}` : '';
    return `https://api.github.com/users${urlUser}${urlType}`;
  }

  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,
    };
  }

  getRepos(type) {
    return () => {
      const username = this.state.userinfo.login;
      ajax().get(App.getGithubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map(repo => ({
              name: repo.name,
              html_url: repo.html_url,
              id: repo.id,
            })),
          });
        });
    };
  }

  handleSearch(e) {
    const { value } = e.target;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    if (keyCode === ENTER) {
      this.setState({ isFetching: true });
      ajax().get(App.getGithubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
            repos: [],
            starred: [],
          });
        })
        .always(() => this.setState({ isFetching: false }));
    }
  }
  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={e => this.handleSearch(e)}
        handleRepos={this.getRepos('repos')}
        handleStarred={this.getRepos('starred')}
      />
    );
  }
}
export default App;
