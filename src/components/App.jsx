import React from 'react';

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.object
  },
  render: function() {
    return this.props.children;
  }
});
