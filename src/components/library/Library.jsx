import React from 'react';
import {Map} from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Shelf from './Shelf';
import states from '../../config/bookStates';

import './Library.styl'

class Library extends React.PureComponent {
  render() {
    const { library, updateBook } = this.props;

    const books = library.get('books');
    const stock = books.filter(book => book.get('state') === states.stock);
    const reading = books.filter(book => book.get('state') === states.reading);
    const read = books.filter(book => book.get('state') === states.read);

    return <main className="library">
      <Shelf type="reading" books={reading} hideWhenEmpty={true} detailed={true} updateBook={updateBook} />
      <Shelf type="stock" books={stock} updateBook={updateBook} />
      <Shelf type="read" books={read} updateBook={updateBook} />
    </main>;
  }
}

Library.propTypes = {
  library: React.PropTypes.instanceOf(Map),
  updateBook: React.PropTypes.func.isRequired
};

export default DragDropContext(HTML5Backend)(Library);
