import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Shelf from './Shelf';
import states from '../../config/bookStates';

import './Library.styl'

const Library = React.createClass({
  displayName: 'Library',
  mixins: [PureRenderMixin],
  propTypes: {
    library: React.PropTypes.instanceOf(Map)
  },
  render: function() {
    const books = this.props.library.get('books');
    const stock = books.filter(book => book.get('state') === states.stock);
    const reading = books.filter(book => book.get('state') === states.reading);
    const read = books.filter(book => book.get('state') === states.read);

    return <main className="library">
      <Shelf type="reading" books={reading} hideWhenEmpty={true} detailed={true}/>
      <Shelf type="stock" books={stock} />
      <Shelf type="read" books={read} />
    </main>;
  }
});

export default DragDropContext(HTML5Backend)(Library);
