import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import BookDrawer from './drawer/BookDrawer';
import { BookFormContainer } from './form/BookForm';
import { addBook } from '../redux/reducers/library.action';

const NewBook = React.createClass({
  displayName: 'NewBook',
  mixins: [PureRenderMixin],
  propTypes: {
    addBook: React.PropTypes.func.isRequired,
    editorBook: React.PropTypes.instanceOf(Map),
    state: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  save: function(book) {
    this.props.addBook(book);
    this.context.router.push('/');
  },
  render: function() {
    const { editorBook } = this.props;

    return <BookDrawer book={editorBook}>
      <header>
        <h2>Add a book</h2>
        <aside>
          <a href="#">Cancel</a>
        </aside>
      </header>

      <BookFormContainer onSubmit={this.save}/>
    </BookDrawer>;
  }
});

export default NewBook;

const mapStateToProps = (state, props) => ({
  editorBook: state.get('editor'),
  state: props.params.type
});

const mapDispatchToProps = {
  addBook
};

export const NewBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBook);
