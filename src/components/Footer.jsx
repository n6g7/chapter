import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Footer',
  mixins: [PureRenderMixin],
  render: function() {
    return <footer>
      Built with ♥ on <a href="https://github.com/n6g7/chapter" target="blank">GitHub</a>.
    </footer>
  }
});
