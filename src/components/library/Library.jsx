import React from 'react';
import {Map} from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Shelf from './Shelf';

import './Library.styl'

class Library extends React.PureComponent {
  render() {
    const { library, updateBook } = this.props;

    const books = library.get('books');

    const booksByState = books.groupBy(book => book.get('state'));

    return <main className="library">
      { booksByState.get('reading') &&
        <Shelf type="reading" books={booksByState.get('reading')} hideWhenEmpty={true} detailed={true} updateBook={updateBook} />
      }
      { booksByState.get('stock') &&
        <Shelf type="stock" books={booksByState.get('stock')} updateBook={updateBook} />
      }
      { booksByState.get('read') &&
        <Shelf type="read" books={booksByState.get('read')} updateBook={updateBook} />
      }
      { booksByState.get('wishlist') &&
        <Shelf type="wishlist" books={booksByState.get('wishlist')} updateBook={updateBook} />
      }
    </main>;
  }
}

Library.propTypes = {
  library: React.PropTypes.instanceOf(Map),
  updateBook: React.PropTypes.func.isRequired
};

export default DragDropContext(HTML5Backend)(Library);
