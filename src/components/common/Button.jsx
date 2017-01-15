import React from 'react';

import './Button.styl';

class Button extends React.PureComponent {
  onClick() {
    const { click, link } = this.props;
    const { router } = this.context;

    if (click) return click();
    else if (link) return router.push(link);
  }

  render() {
    const { children, inline, type } = this.props;
    const classes = inline ? 'inline' : '';

    return <button
      className={classes}
      onClick={this.onClick.bind(this)}
      type={type}
    >
      { children }
    </button>;
  }
}

Button.propTypes = {
  children: React.PropTypes.any,
  click: React.PropTypes.func,
  inline: React.PropTypes.bool,
  link: React.PropTypes.string,
  type: React.PropTypes.string
};

Button.defaultProps = {
  type: 'button'
};

Button.contextTypes = {
  router: React.PropTypes.object
};

export default Button;
