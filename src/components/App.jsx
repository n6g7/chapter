import React from 'react';

import Notifications from './common/Notifications';
import Header from './common/Header';
import './App.styl';

class App extends React.PureComponent {
  render() {
    return <div className="chapter">
      <Header/>
      <Notifications/>
      {this.props.children}
    </div>;
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
