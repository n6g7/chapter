import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import BookList from './BookList';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const stock = this.props.library.books.filter(book => book.state === 'stock');
    const read = this.props.library.books.filter(book => book.state === 'read');

    return <div>
      <h1>Stock</h1>
      <BookList books={stock} />
      <h1>Read</h1>
      <BookList books={read} />
    </div>;
  }
});
