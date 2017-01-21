import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { push } from 'react-router-redux';

import DetailedCover from '../book/DetailedCover';
import Cover from '../book/DraggableCover';

class BookList extends React.PureComponent {
  goTo(book) {
    this.props.push(`/view/${book.get('uuid')}`);
  }

  renderCover(book) {
    const { detailed } = this.props;

    return detailed ?
      <DetailedCover book={book} />:
      <Cover book={book} />;
  }

  render() {
    return <ul>
      {this.props.books.map(book =>
        <li key={book.get('uuid')} onClick={() => this.goTo(book)}>
          {this.renderCover(book)}
        </li>
      )}
    </ul>;
  }
}

BookList.propTypes = {
  books: React.PropTypes.instanceOf(List),
  detailed: React.PropTypes.bool,
  push: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  push
};

export const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

export default BookListContainer;
