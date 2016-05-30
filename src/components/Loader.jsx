import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import '../assets/styl/loader.styl';

export default React.createClass({
  displayName: 'Loader',
  mixins: [PureRenderMixin],
  render: function() {
    return <div className="loader">
      <span></span>
    </div>
  }
});
