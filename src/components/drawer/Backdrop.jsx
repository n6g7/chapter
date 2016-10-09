import React from 'react';

import '../../assets/styl/backdrop.styl';

export default React.createClass({
  displayName: 'Backdrop',
  propTypes: {
    children: React.PropTypes.object,
    onClick: React.PropTypes.func
  },
  render: function() {
    return <div className="backdrop" onClick={this.props.onClick}>
      {this.props.children}
    </div>;
  }
});
