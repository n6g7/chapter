import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { fromJS } from 'immutable';

import Button from '../common/Button';

export default React.createClass({
  displayName: 'Import',
  mixins: [PureRenderMixin],
  propTypes: {
    setState: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return { jsonState: '' };
  },
  doImport: function() {
    const { jsonState } = this.state;
    const newState = fromJS(JSON.parse(jsonState));

    this.props.setState(newState);
  },
  handleChange: function(e) {
    const newValue = e.target.value;
    this.setState({ jsonState: newValue });
  },
  render: function() {
    const { jsonState } = this.state;

    return <div>
      <h3>Import</h3>
      <textarea
        value={jsonState}
        onChange={this.handleChange}
      />
      <div>
        <Button
          label="Import"
          className="red"
          click={() => this.doImport()}
        />
      </div>
    </div>;
  }
});
