import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import BookShelf from './library/BookShelf';
import Button from './common/Button';
import Header from './common/Header';

import '../assets/styl/library.styl'

export default React.createClass({
  displayName: 'Library',
  mixins: [PureRenderMixin],
  propTypes: {
    library: React.PropTypes.instanceOf(Map)
  },
  render: function() {
    const books = this.props.library.get('books');
    const stock = books.filter(book => book.get('state') === 'stock');
    const reading = books.filter(book => book.get('state') === 'reading');
    const read = books.filter(book => book.get('state') === 'read');

    return <div>
      <Header>
        <Button label="New book" icon="+" link="/new" />
      </Header>
      <div className="collections">
        <BookShelf type="stock" books={stock} />
        <BookShelf type="reading" books={reading} hideWhenEmpty={true} />
        <BookShelf type="read" books={read} />
      </div>
    </div>;
  }
});
