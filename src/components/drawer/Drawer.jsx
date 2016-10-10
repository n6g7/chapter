import React from 'react';

import Backdrop from './Backdrop';

import './Drawer.styl';

export default React.createClass({
  displayName: 'Drawer',
  propTypes: {
    children: React.PropTypes.object
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  onClickBackdrop: function() {
    this.context.router.push('/');
  },
  onClickDrawer: function(event) {
    event.stopPropagation();
  },
  render: function() {
    return <Backdrop onClick={this.onClickBackdrop}>
      <aside className="drawer" onClick={this.onClickDrawer}>
        <div className="wrapper">
          {this.props.children}
        </div>
      </aside>
    </Backdrop>;
  }
});
