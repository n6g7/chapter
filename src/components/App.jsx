import React from 'react';
import {Map} from 'immutable';

import Library from './Library';
import Sidebar from './Sidebar';

import '../assets/styl/chapter.styl';

export default React.createClass({
  displayName: 'App',
  propTypes: {
    library: React.PropTypes.instanceOf(Map),
    children: React.PropTypes.object
  },
  render: function() {
    return <div className="chapter">
      <Sidebar/>
      <Library library={this.props.library} />
      {this.props.children}
    </div>;
  }
});
