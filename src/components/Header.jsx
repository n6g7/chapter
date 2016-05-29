import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ActionBar from './ActionBar';

export default React.createClass({
  displayName: 'Header',
  mixins: [PureRenderMixin],
  render: function() {
    return <header>
      <h1>Library</h1>
      <ActionBar />
    </header>
  }
});
