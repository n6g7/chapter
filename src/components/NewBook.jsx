import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import BookForm from './BookForm';

export default React.createClass({
  displayName: 'NewBook',
  mixins: [PureRenderMixin],
  propTypes: {
    addBook: React.PropTypes.func
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  render: function() {
    const book = Map();
    const create = book => {
      this.props.addBook(book);
      this.context.router.push('/');
    };

    return <BookForm book={book} label="Create" onSubmit={create}></BookForm>;
  }
});
