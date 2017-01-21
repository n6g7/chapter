import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Backdrop from './Backdrop';

import './Drawer.styl';

class Drawer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClickBackdrop = this.onClickBackdrop.bind(this);
    this.onClickDrawer = this.onClickDrawer.bind(this);
  }

  onClickBackdrop() {
    this.props.push('/');
  }

  onClickDrawer(event) {
    event.stopPropagation();
  }

  render() {
    return <Backdrop onClick={this.onClickBackdrop}>
      <aside className="drawer" onClick={this.onClickDrawer}>
        <div className="wrapper">
          {this.props.children}
        </div>
      </aside>
    </Backdrop>;
  }
}

Drawer.propTypes = {
  children: React.PropTypes.any,
  push: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  push
};

export const DrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);

export default DrawerContainer;
