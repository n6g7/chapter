import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Library from './library/Library';
import Sidebar from './common/Sidebar';
import { updateBook } from '../redux/reducers/library.action';

import './App.styl';

const App = React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.object,
    library: React.PropTypes.instanceOf(Map),
    updateBook: React.PropTypes.func.isRequired
  },
  render: function() {
    const { updateBook } = this.props;

    return <div className="chapter">
      <Sidebar/>
      <Library library={this.props.library} updateBook={updateBook} />
      {this.props.children}
    </div>;
  }
});

export default App;

const mapStateToProps = state => ({
  library: state.get('library')
});

const mapDispatchToProps = {
  updateBook
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
