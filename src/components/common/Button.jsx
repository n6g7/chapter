import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './Button.styl';

export default React.createClass({
  displayName: 'Button',
  mixins: [PureRenderMixin],
  propTypes: {
    children: React.PropTypes.any,
    click: React.PropTypes.func,
    inline: React.PropTypes.bool,
    link: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  onClick: function() {
    const { click, link } = this.props;
    const { router } = this.context;

    if (click) return click();
    else if (link) return router.push(link);
  },
  render: function() {
    const classes = this.props.inline ? 'inline' : '';

    return <button onClick={this.onClick} className={classes}>
      {this.props.children}
    </button>;
  }
});
