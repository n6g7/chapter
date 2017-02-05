import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Link } from 'react-router';

import DetailedCover from '../book/DetailedCover';
import Cover from '../book/DraggableCover';

class BookList extends React.PureComponent {
  renderCover(book) {
    const { detailed } = this.props;

    return detailed ?
      <DetailedCover book={book} />:
      <Cover book={book} />;
  }

  render() {
    return <ul>
      {this.props.books.map(book =>
        <li key={book.get('bid')}>
          <Link to={`/view/${book.get('bid')}`}>
            {this.renderCover(book)}
          </Link>
        </li>
      )}
    </ul>;
  }
}

BookList.propTypes = {
  books: React.PropTypes.instanceOf(List),
  detailed: React.PropTypes.bool,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

export default BookListContainer;
