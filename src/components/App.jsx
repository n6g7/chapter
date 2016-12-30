import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Library from './library/Library';
import Sidebar from './common/Sidebar';

import './App.styl';

const App = React.createClass({
  displayName: 'App',
  propTypes: {
    library: React.PropTypes.instanceOf(Map),
    children: React.PropTypes.object
  },
  render: function() {
    return <div className="chapter">
      <Sidebar/>
      <Library library={this.props.library} />
      {this.props.children}
    </div>;
  }
});

export default App;

const mapStateToProps = state => ({
  library: state.get('library')
});

export const AppContainer = connect(
  mapStateToProps
)(App);
