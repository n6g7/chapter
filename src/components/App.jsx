import React from 'react'

import Notifications from './common/Notifications'
import Sidebar from './common/Sidebar'
import './App.styl'

class App extends React.PureComponent {
  render () {
    return <div className='chapter'>
      <Sidebar />
      <Notifications />
      {this.props.children}
    </div>
  }
}

App.propTypes = {
  children: React.PropTypes.object
}

export default App
