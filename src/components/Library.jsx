import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BookShelf from './library/BookShelf';
import Button from './common/Button';
import Header from './common/Header';
import states from '../config/bookStates';

import '../assets/styl/library.styl'

const Library = React.createClass({
  displayName: 'Library',
  mixins: [PureRenderMixin],
  propTypes: {
    library: React.PropTypes.instanceOf(Map),
    updateBook: React.PropTypes.func
  },
  render: function() {
    const books = this.props.library.get('books');
    const stock = books.filter(book => book.get('state') === states.stock);
    const reading = books.filter(book => book.get('state') === states.reading);
    const read = books.filter(book => book.get('state') === states.read);

    return <div>
      <Header>
        <Button label="New book" icon="+" link="/new" />
        <Button label="Export" icon="I/O" link="/io" />
      </Header>
      <div className="collections">
        <BookShelf type="stock" books={stock} updateBook={this.props.updateBook} />
        <BookShelf type="reading" books={reading} hideWhenEmpty={true} updateBook={this.props.updateBook} />
        <BookShelf type="read" books={read} updateBook={this.props.updateBook} />
      </div>
    </div>;
  }
});

export default DragDropContext(HTML5Backend)(Library);
