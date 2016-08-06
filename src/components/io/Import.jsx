import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Button from '../common/Button';

export default React.createClass({
  displayName: 'Import',
  mixins: [PureRenderMixin],
  propTypes: {
    importState: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return { jsonState: '' };
  },
  doImport: function() {
    const { jsonState } = this.state;

    this.props.importState(JSON.parse(jsonState));
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
