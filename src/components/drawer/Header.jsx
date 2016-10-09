import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Header',
  mixins: [PureRenderMixin],
  propTypes: {
    children: React.PropTypes.element,
    colour: React.PropTypes.string
  },
  render: function() {
    const { children, colour } = this.props;

    return <header style={{backgroundColor: colour }}>
        {children}
    </header>;
  }
});
