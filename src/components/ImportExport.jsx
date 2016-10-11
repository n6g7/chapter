import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Map } from 'immutable';

import Export from './io/Export';
import Import from './io/Import';
import './ImportExport.styl';

export default React.createClass({
  displayName: 'ImportExport',
  mixins: [PureRenderMixin],
  propTypes: {
    state: React.PropTypes.instanceOf(Map).isRequired,
    importState: React.PropTypes.func.isRequired
  },
  render: function() {
    const { state, importState } = this.props;

    return <div>
      <section className="io">
        <Export state={state} />
        <Import importState={importState} />
      </section>
    </div>;
  }
});
