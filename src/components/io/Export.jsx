import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Map } from 'immutable';
import copy from 'copy-to-clipboard';

import Button from '../common/Button';

export default React.createClass({
  displayName: 'Export',
  mixins: [PureRenderMixin],
  propTypes: {
    state: React.PropTypes.instanceOf(Map).isRequired
  },
  getInitialState: function() {
    return { jsonState: '' };
  },
  generate: function() {
    const state = this.props.state.toJS();
    const jsonState = JSON.stringify(state, null, '  ');

    this.setState({ jsonState });
  },
  copyToClipboard: function() {
    copy(this.state.jsonState);
  },
  render: function() {
    const { jsonState } = this.state;

    return <div>
      <h3>Export</h3>
      <textarea value={jsonState} readOnly />
      <div>
        <Button
          label="Generate export"
          className="red"
          click={() => this.generate()}
        />
        <Button
          label="Copy to clipboard"
          className="red"
          click={() => this.copyToClipboard()}
        />
      </div>
    </div>;
  }
});
