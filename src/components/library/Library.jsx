import React from 'react';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Shelf from './Shelf';

import './Library.styl'

class Library extends React.PureComponent {
  render() {
    const { library } = this.props;

    const books = library.get('books');

    const booksByState = books.groupBy(book => book.get('state'));

    return <main className="library">
      <Shelf
        books={booksByState.get('reading', List())}
        detailed
        hideWhenEmpty
        type="reading"
      />
      <Shelf
        books={booksByState.get('stock', List())}
        type="stock"
      />
      <Shelf
        books={booksByState.get('read', List())}
        type="read"
      />
      <Shelf
        books={booksByState.get('wishlist', List())}
        type="wishlist"
      />
    </main>;
  }
}

Library.propTypes = {
  library: React.PropTypes.instanceOf(Map),
};

const mapStateToProps = state => ({
  library: state.get('library')
});

const mapDispatchToProps = {};

export const LibraryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);

export default DragDropContext(HTML5Backend)(LibraryContainer);
