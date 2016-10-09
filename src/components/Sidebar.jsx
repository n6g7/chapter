import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

import packageConfig from '../../package.json';
import '../assets/styl/sidebar.styl';

const DEFAULT_TITLE = 'Chapter';

export default React.createClass({
  displayName: 'Sidebar',
  mixins: [PureRenderMixin],
  propTypes: {
    title: React.PropTypes.string
  },
  render: function() {
    const title = this.props.title || DEFAULT_TITLE;

    return <aside className="sidebar">
      <h1>{title}</h1>
      <div>
        <nav>
          <ul>
            <li><Link to="new">+</Link></li>
          </ul>
        </nav>
        <footer>
          <a
            href="https://github.com/n6g7/chapter"
            target="blank"
            title="gh://n6g7/chapter"
          >v{packageConfig.version}</a>
        </footer>
      </div>
    </aside>
  }
});
