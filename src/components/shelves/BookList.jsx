import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List} from 'immutable';
import DetailedCover from '../book/DetailedCover';
import Cover from '../book/DraggableCover';

export default React.createClass({
  displayName: 'BookList',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.instanceOf(List),
    detailed: React.PropTypes.bool
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  goTo: function(book) {
    this.context.router.push(`/edit/${book.get('uuid')}`);
  },
  renderCover: function(book) {
    const {detailed} = this.props;

    return detailed ?
      <DetailedCover book={book} />:
      <Cover book={book} />;
  },
  render: function() {
    return <ul>
      {this.props.books.map(book =>
        <li key={book.get('uuid')} onClick={() => this.goTo(book)}>
          {this.renderCover(book)}
        </li>
      )}
    </ul>;
  }
});
