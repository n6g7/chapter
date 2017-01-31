import React from 'react';
import { Link } from 'react-router';

import './Button.styl';

class Button extends React.PureComponent {
  renderSimpleButton() {
    const { children, type, onClick } = this.props;
    const classes = '';

    return <button
      className={classes}
      onClick={onClick}
      type={type}
    >
      { children }
    </button>;
  }

  render() {
    const { link } = this.props;
    const button = this.renderSimpleButton();

    return link
      ? <Link to={link}>{ button }</Link>
      : button;
  }
}

Button.propTypes = {
  children: React.PropTypes.any,
  onClick: React.PropTypes.func,
  link: React.PropTypes.string,
  type: React.PropTypes.string
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
