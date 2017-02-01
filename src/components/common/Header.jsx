import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import Button from './Button';
import Loader from './Loader';
import { login } from '../../redux/reducers/user.action';
import packageConfig from '../../../package.json';
import './Header.styl';

import fingerprint from '../../images/fingerprint.svg';
import timeline from '../../images/timeline.svg';

class Header extends React.PureComponent {
  render() {
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
      { this.props.loading && <Loader small white/> }
      <nav>
        <ul>
          <li>
            <Button onClick={this.props.login} icon={fingerprint} small>Login</Button>
          </li>
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
  login: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.getIn(['library', 'loading']) || state.getIn(['user', 'loading']),
});
const mapDispatchToProps = {
  login
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
