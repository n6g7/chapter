import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Export from './io/Export';
import Import from './io/Import';
import { importState } from '../redux/reducers/library.action';
import './ImportExport.styl';

const ImportExport = React.createClass({
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

export default ImportExport;

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = {
  importState
};

export const ImportExportContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportExport);
