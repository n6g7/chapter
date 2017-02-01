import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import Button from './Button';
import Loader from './Loader';
import { login, logout } from '../../redux/reducers/user.action';
import packageConfig from '../../../package.json';
import './Header.styl';

import fingerprint from '../../images/fingerprint.svg';
import timeline from '../../images/timeline.svg';

class Header extends React.PureComponent {
  render() {
    const { loading, loggedIn, login, logout } = this.props;

    return <header className="head">
      <div className="title">
        <h1>
          <Link to="/">Chapter</Link>
        </h1>
        <a
          href={packageConfig.homepage}
          target="blank"
          title="gh://n6g7/chapter"
        >v{packageConfig.version}</a>
      </div>

      { loading && <Loader small white/> }

      <nav>
        <ul>
          { !loggedIn &&
            <li>
              <Button onClick={login} icon={fingerprint} small>Login</Button>
            </li>
          }
          { loggedIn &&
            <li>
              <Button onClick={logout} small>Logout</Button>
            </li>
          }
          <li>
            <Button link="timeline" icon={timeline} small/>
          </li>
          <li>
            <Button link="new" small>Add a book</Button>
          </li>
        </ul>
      </nav>
    </header>
  }
}

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.getIn(['library', 'loading']) || state.getIn(['user', 'loading']),
  loggedIn: state.getIn(['user', 'loggedIn']),
});
const mapDispatchToProps = {
  login,
  logout,
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
