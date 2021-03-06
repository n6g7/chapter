import React from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { Map } from 'immutable'

import BookDrawer from '../drawer/BookDrawer'
import { BookFormContainer } from '../form/BookForm'
import Button from '../common/Button'
import saveImg from '@assets/save.svg'
import {
  updateBook,
  removeBook
} from '@actions/library'

class EditBook extends React.PureComponent {
  constructor (props) {
    super(props)

    this.save = this.save.bind(this)
  }

  save (book) {
    this.props.updateBook(book)
  }

  remove (book) {
    if (window.confirm('Are you sure?')) {
      this.props.removeBook(book)
    }
  }

  render () {
    const { book, editorBook } = this.props

    return <BookDrawer book={editorBook}>
      <header>
        <h2>
          Edit a book
        </h2>
        <aside>
          <a onClick={this.props.goBack}>
            Cancel
          </a>
        </aside>
      </header>

      <BookFormContainer
        initialBook={book}
        onSubmit={this.save}
      >
        <Button type='submit' icon={saveImg}>
          Save book
        </Button>
        <Button onClick={() => this.remove(book)}>
          Delete book
        </Button>
      </BookFormContainer>
    </BookDrawer>
  }
}

EditBook.propTypes = {
  editorBook: React.PropTypes.instanceOf(Map),
  updateBook: React.PropTypes.func,
  book: React.PropTypes.instanceOf(Map),
  removeBook: React.PropTypes.func,
  goBack: React.PropTypes.func.isRequired
}

export default EditBook

const mapStateToProps = (state, props) => ({
  book: state
    .getIn(['library', 'books'])
    .find(book => book.get('bid') === props.params.bid),
  editorBook: state.get('editor')
})

const mapDispatchToProps = {
  updateBook,
  removeBook,
  goBack
}

export const EditBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBook)
