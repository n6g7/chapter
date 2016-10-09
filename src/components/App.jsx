import React from 'react';
import Library from '../containers/Library';
import Sidebar from './Sidebar';

import '../assets/styl/chapter.styl';

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.object
  },
  render: function() {
    return <div className="chapter">
      <Sidebar/>
      <Library/>
      {this.props.children}
    </div>;
  }
});
