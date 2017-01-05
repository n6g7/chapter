import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Library from './library/Library';
import Sidebar from './common/Sidebar';
import { updateBook } from '../redux/reducers/library.action';

import './App.styl';

class App extends React.PureComponent {
  render() {
    const { updateBook } = this.props;

    return <div className="chapter">
      <Sidebar/>
      <Library library={this.props.library} updateBook={updateBook} />
      {this.props.children}
    </div>;
  }
}

App.propTypes = {
  children: React.PropTypes.object,
  library: React.PropTypes.instanceOf(Map),
  updateBook: React.PropTypes.func.isRequired
};

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
