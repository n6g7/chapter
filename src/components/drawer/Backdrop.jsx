import React from 'react'

import './Backdrop.styl'

class Backdrop extends React.PureComponent {
  render () {
    return <div className='backdrop' onClick={this.props.onClick}>
      {this.props.children}
    </div>
  }
}

Backdrop.propTypes = {
  children: React.PropTypes.object,
  onClick: React.PropTypes.func
}

export default Backdrop
