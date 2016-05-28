import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import {Link} from 'react-router'
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

    return <div>
      <BookForm book={book} label="Create" onSubmit={create}></BookForm>
      <Link to="/" className="btn btn-info">Back</Link>
    </div>;
  }
});
