import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import InputElement from 'react-input-mask';

const ISBN_REGEX = /^(9(7[89]?)?)?/;
const ISBN_10_MASK = '9 999 99999 9';
const ISBN_13_MASK = `999 ${ISBN_10_MASK}`;

export default React.createClass({
  displayName: 'ISBNInput',
  mixins: [PureRenderMixin],
  propTypes: {
    onChange: React.PropTypes.func
  },
  getInitialState: function() {
    return { mask: ISBN_13_MASK };
  },
  handleChange: function(e) {
    const value = e.target.value.split(' ').join('');
    e.target.value = value;

    this.setState({
      mask: ISBN_REGEX.test(value) ? ISBN_13_MASK : ISBN_10_MASK
    });

    this.props.onChange(e);
  },
  render: function() {
    const { ...extraProps } = this.props;
    const { mask } = this.state;

    return <InputElement
      mask={mask}
      maskChar={null}
      placeholder="000 0 000 00000 0"
      onChange={this.handleChange}
      type="text"
      {...extraProps}
    />;
  }
});
