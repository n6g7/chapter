import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import '../../assets/styl/button.styl';

export default React.createClass({
  displayName: 'Button',
  mixins: [PureRenderMixin],
  propTypes: {
    children: React.PropTypes.element,
    click: React.PropTypes.func,
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
    return <button onClick={this.onClick}>
      {this.props.children}
    </button>;
  }
});
