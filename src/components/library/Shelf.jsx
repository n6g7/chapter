import React from 'react';
import { connect } from 'react-redux';
import capitalize from 'lodash/capitalize';
import { List } from 'immutable';
import { DropTarget } from 'react-dnd';
import { Link } from 'react-router';
import BookList from './BookList';

import { updateBook } from '../../redux/reducers/library.action';
import ItemTypes from '../../config/dragDropTypes';

import './Shelf.styl'

const shelfTarget = {
  drop(props, monitor) {
    const { book } = monitor.getItem();
    props.updateBook(book.set('state', props.type));
  },
  canDrop() {
    return true;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop()
  };
}

class BookShelf extends React.PureComponent {
  render() {
    const {
      books,
      canDrop,
      connectDropTarget,
      type,
      detailed
    } = this.props;
    const sectionName = capitalize(type);

    let classes = ['shelf', type];
    if (canDrop) classes.push('hover');

    let inner = null;

    if (this.props.hideWhenEmpty && books.isEmpty()) {
      classes.push('hide');
    }
    else if (!books.isEmpty()){
      inner = <BookList
        books={books}
        detailed={detailed}
      />;
    }

    return connectDropTarget(<section className={classes.join(' ')}>
      <header>
        <h2>{sectionName}</h2>
        <nav>
          <ul>
            <li>{books.count()} books</li>
            <li><Link to={`/new/${type}`}>+ Add a book</Link></li>
          </ul>
        </nav>
      </header>
      {inner}
    </section>);
  }
}

BookShelf.propTypes = {
  books: React.PropTypes.instanceOf(List),
  hideWhenEmpty: React.PropTypes.bool.isRequired,
  type: React.PropTypes.string,
  updateBook: React.PropTypes.func,
  connectDropTarget: React.PropTypes.func.isRequired,
  canDrop: React.PropTypes.bool.isRequired,
  detailed: React.PropTypes.bool.isRequired,
};

BookShelf.defaultProps = {
  detailed: false,
  hideWhenEmpty: false,
};

const DropBookShelf = DropTarget(ItemTypes.BOOK, shelfTarget, collect)(BookShelf);

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  updateBook
};

const BookShelfContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropBookShelf);

export default BookShelfContainer;
