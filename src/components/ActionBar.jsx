import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router'

export default React.createClass({
  displayName: 'ActionBar',
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="btn-toolbar">
      <div className="btn-group">
        <Link to="/new" className="btn btn-primary">New</Link>
      </div>
    </div>
  }
});
