import React from 'react';

import Notifications from './common/Notifications';
import Sidebar from './common/Sidebar';
import './App.styl';

class App extends React.PureComponent {
  render() {
    return <div className="chapter">
      <Sidebar/>
      {this.props.children}
      <Notifications/>
    </div>;
  }
}

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
