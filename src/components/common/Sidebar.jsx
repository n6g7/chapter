import React from 'react';
import {Link} from 'react-router';

import packageConfig from '../../../package.json';
import './Sidebar.styl';

class Sidebar extends React.PureComponent {
  render() {
    return <aside className="sidebar">
      <h1>Chapter</h1>
      <nav>
        <ul>
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
