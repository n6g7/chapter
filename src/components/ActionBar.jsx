import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

export default React.createClass({
  displayName: 'ActionBar',
  mixins: [PureRenderMixin],
  render: function() {
    return <nav>
      <Link to="/new">
        <button>New book</button>
      </Link>
    </nav>
  }
});
