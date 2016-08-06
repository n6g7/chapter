import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List} from 'immutable';
import Cover from '../book/DraggableCover';

export default React.createClass({
  displayName: 'BookList',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.instanceOf(List)
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  goTo: function(book) {
    this.context.router.push(`/edit/${book.get('uuid')}`);
  },
  render: function() {
    return <ul>
      {this.props.books.map(book =>
        <li key={book.get('uuid')} onClick={() => this.goTo(book)}>
          <Cover book={book} />
        </li>
      )}
    </ul>;
  }
});
