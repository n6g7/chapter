import React from 'react';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Shelf from './Shelf';

import './Library.styl'

class Library extends React.PureComponent {
  render() {
    const { library, states } = this.props;

    const books = library.get('books');

    const booksByState = books.groupBy(book => book.get('state'));

    return <main className="library">
      { states.map(state =>
        <Shelf
          books={booksByState.get(state, List())}
          key={state}
          detailed={state == 'reading'}
          type={state}
        />
      )}
    </main>;
  }
}

Library.propTypes = {
  library: React.PropTypes.instanceOf(Map),
  states: React.PropTypes.array.isRequired,
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
