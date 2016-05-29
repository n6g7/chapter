import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import '../assets/styl/loader.styl';

export default React.createClass({
  displayName: 'Loader',
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="cssload-container">
      <ul className="cssload-flex-container">
        <li>
          <span className="cssload-loading"></span>
        </li>
      </ul>
    </div>
  }
});
