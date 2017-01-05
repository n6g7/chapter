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
    const classes = this.props.inline ? 'inline' : '';

    return <button onClick={this.onClick.bind(this)} className={classes}>
      {this.props.children}
    </button>;
  }
}

Button.propTypes = {
  children: React.PropTypes.any,
  click: React.PropTypes.func,
  inline: React.PropTypes.bool,
  link: React.PropTypes.string
};

Button.contextTypes = {
  router: React.PropTypes.object
};

export default Button;
