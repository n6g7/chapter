import React from 'react';

import Backdrop from './Backdrop';

import './Drawer.styl';

class Drawer extends React.PureComponent {
  onClickBackdrop() {
    this.context.router.push('/');
  }

  onClickDrawer(event) {
    event.stopPropagation();
  }

  render() {
    return <Backdrop onClick={this.onClickBackdrop.bind(this)}>
      <aside className="drawer" onClick={this.onClickDrawer.bind(this)}>
        <div className="wrapper">
          {this.props.children}
        </div>
      </aside>
    </Backdrop>;
  }
}

Drawer.propTypes = {
  children: React.PropTypes.any
};

Drawer.contextTypes = {
  router: React.PropTypes.object
};

export default Drawer;
