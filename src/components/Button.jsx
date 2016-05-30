import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

export default React.createClass({
  displayName: 'Button',
  mixins: [PureRenderMixin],
  propTypes: {
    className: React.PropTypes.string,
    click: React.PropTypes.func,
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    link: React.PropTypes.string
  },
  render: function() {
    const classes = ['button', this.props.className].join(' ');
    const button = <div className={classes} onClick={this.props.click}>
      {this.props.icon ?
        <span className="icon">{this.props.icon}</span> :
        ''
      }
      <span>{this.props.label}</span>
    </div>;

    return this.props.link ?
      <Link to={this.props.link}>{button}</Link>:
      button
    ;
  }
});
