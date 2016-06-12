import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'ActionBar',
  mixins: [PureRenderMixin],
  propTypes: {
    children: React.PropTypes.object
  },
  render: function() {
    return <nav>
      {this.props.children}
    </nav>
  }
});
