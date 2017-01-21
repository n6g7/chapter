import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './common/Sidebar';
import './App.styl';

class App extends React.PureComponent {
  render() {
    return <div className="chapter">
      <Sidebar/>
      {this.props.children}
    </div>;
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
