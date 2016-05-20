import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Book from './Book';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <ul className="list-group">
      {this.props.books.map(book => <Book book={book} />)}
    </ul>;
  }
});
