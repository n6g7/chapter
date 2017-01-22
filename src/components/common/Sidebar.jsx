import React from 'react';
import {Link} from 'react-router';

import packageConfig from '../../../package.json';
import './Sidebar.styl';

import timeline from '../../images/timeline.svg';

class Sidebar extends React.PureComponent {
  render() {
    return <aside className="sidebar">
      <h1>
        <Link to="/">Chapter</Link>
      </h1>
      <nav>
        <ul>
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

export default Sidebar;
