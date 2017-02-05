import React from 'react';
import { Link } from 'react-router';

import './Button.styl';

class Button extends React.PureComponent {
  getClassName(base='') {
    const { small } = this.props;
    return `${base} ${small ? 'small' : ''}`;
  }

  renderIcon() {
    const { children, icon } = this.props;
    const classes = `${children ? 'icon' : ''}`;

    return icon ? <img className={classes} src={icon} /> : null;
  }

  renderSimpleButton() {
    const { children, type, onClick } = this.props;

    return <button
      className={this.getClassName()}
      onClick={onClick}
      type={type}
    >
      { this.renderIcon() }
      { children }
    </button>;
  }

  renderLink() {
    const { children, link } = this.props;

    return <Link
      className={this.getClassName('btn')}
      to={link}
    >
      { this.renderIcon() }
      { children }
    </Link>;
  }

  render() {
    const { link } = this.props;

    return link ? this.renderLink() : this.renderSimpleButton();
  }
}

Button.propTypes = {
  children: React.PropTypes.string,
  icon: React.PropTypes.string,
  onClick: React.PropTypes.func,
  link: React.PropTypes.string,
  small: React.PropTypes.bool.isRequired,
  type: React.PropTypes.string
};

Button.defaultProps = {
  small: false,
  type: 'button'
};

export default Button;
