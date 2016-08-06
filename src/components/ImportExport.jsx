import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Map } from 'immutable';

import Header from './common/Header';
import Export from './io/Export';
import Import from './io/Import';
import '../assets/styl/export.styl';

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
      <Header title="Export" backButton={true} />

      <section className="io">
        <Export state={state} />
        <Import importState={importState} />
      </section>
    </div>;
  }
});
