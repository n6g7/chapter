import React from 'react';

import './Loader.styl';

class Loader extends React.PureComponent {
  render() {
    const { label, small, white } = this.props;

    return <div className={`loader ${small ? 'small' : ''} ${white ? 'white' : ''}`}>
      <span></span>
      { label }
    </div>
  }
}

Loader.propTypes = {
  label: React.PropTypes.string.isRequired,
  small: React.PropTypes.bool.isRequired,
  white: React.PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  label: 'Loading',
  small: false,
  white: false,
};

export default Loader;
