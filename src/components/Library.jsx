import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import BookList from './BookList';

export default React.createClass({
  displayName: 'Library',
  mixins: [PureRenderMixin],
  propTypes: {
    library: React.PropTypes.object
  },
  render: function() {
    const books = this.props.library.books;
    const stock = books.filter(book => book.state === 'stock');
    const read = books.filter(book => book.state === 'read');

    return <div>
      <h1>Stock</h1>
      <BookList books={stock} />
      <h1>Read</h1>
      <BookList books={read} />
    </div>;
  }
});
