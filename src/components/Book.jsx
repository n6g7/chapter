import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const book = this.props.book;

    return <li className="list-group-item">
      <strong>{book.title} </strong>
      <em>{book.startDate} - {book.endDate}</em>
    </li>;
  }
});
