import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { login } from '../../redux/reducers/user.action';
import packageConfig from '../../../package.json';
import './Sidebar.styl';

import fingerprint from '../../images/fingerprint.svg';
import timeline from '../../images/timeline.svg';

class Sidebar extends React.PureComponent {
  render() {
    return <aside className="sidebar">
      <h1>
        <Link to="/">Chapter</Link>
      </h1>
      <nav>
        <ul>
          <li><Link onClick={this.props.login}><img src={fingerprint} /></Link></li>
          <li><Link to="timeline"><img src={timeline} /></Link></li>
          <li><Link to="new">+</Link></li>
        </ul>
        <a
          href={packageConfig.homepage}
          target="blank"
          title="gh://n6g7/chapter"
        >v{packageConfig.version}</a>
      </nav>
    </aside>
  }
}

Sidebar.propTypes = {
  login: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  login
};

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
