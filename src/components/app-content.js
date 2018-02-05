import React, { PropTypes } from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ userinfo, repos, starred }) => (
  <div className="app">
    <Search />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}
    {!!repos.length &&
    <Repos
      className="repos"
      title="Repositórios"
      repos={repos}
    />}
    {!!starred.length &&
    <Repos
      className="starred"
      title="Favoritos"
      repos={starred}
    />}
  </div>
);

AppContent.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string,
    repos: PropTypes.string,
    fallowers: PropTypes.string,
    fallowing: PropTypes.string,
  }).isRequired,
  repos: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  starred: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};
export default AppContent;
