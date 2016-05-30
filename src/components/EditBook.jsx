import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import BookForm from './BookForm';
import Button from './Button';
import Header from './Header';

import '../assets/styl/form.styl';

export default React.createClass({
  displayName: 'EditBook',
  mixins: [PureRenderMixin],
  propTypes: {
    updateBook: React.PropTypes.func,
    book: React.PropTypes.instanceOf(Map)
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return { book: this.props.book };
  },
  update: function(book) {
    this.setState({ book });
  },
  save: function(book) {
    this.props.updateBook(book);
    this.context.router.push('/');
  },
  render: function() {
    const book = this.state.book;
    const title = `Update « ${book.get('title')} »`

    return <div>
      <Header title={title} backButton={true}>
        <Button click={() => this.save(this.state.book)} label="Save book" />
      </Header>
      <section className="form">
        <BookForm
          book={book}
          onSubmit={this.save}
          onChange={this.update}
        />
      </section>
    </div>;
  }
});
