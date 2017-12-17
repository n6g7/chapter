import React from 'react'
import { connect } from 'react-redux'
import capitalize from 'lodash/capitalize'
import { List } from 'immutable'
import { DropTarget } from 'react-dnd'
import { Link } from 'react-router'
import BookList from './BookList'

import { updateBook } from '@actions/library'
import ItemTypes from '../../config/dragDropTypes'
import addBook from '@assets/add-book-blue.svg'

import './Shelf.styl'

const shelfTarget = {
  drop (props, monitor) {
    const { book } = monitor.getItem()
    props.updateBook(book.set('state', props.type))
  },
  canDrop () {
    return true
  }
}

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop()
  }
}

class BookShelf extends React.PureComponent {
  renderShelf () {
    const {
      books,
      canDrop,
      type,
      detailed
    } = this.props
    const sectionName = capitalize(type)

    let classes = ['shelf', type]
    if (canDrop) classes.push('hover')

    let inner = null

    if (!books.isEmpty()) {
      inner = <BookList
        books={books}
        detailed={detailed}
      />
    }

    return <section className={classes.join(' ')}>
      <nav>
        <h2>{sectionName}</h2>
        <span>({ books.count() })</span>
        <Link to={`book/new/${type}`}>
          <img src={addBook} />
        </Link>
      </nav>
      {inner}
    </section>
  }

  render () {
    return this.props.connectDropTarget(this.renderShelf())
  }
}

BookShelf.propTypes = {
  books: React.PropTypes.instanceOf(List),
  type: React.PropTypes.string,
  updateBook: React.PropTypes.func,
  connectDropTarget: React.PropTypes.func.isRequired,
  canDrop: React.PropTypes.bool.isRequired,
  detailed: React.PropTypes.bool.isRequired
}

BookShelf.defaultProps = {
  detailed: false
}

const DropBookShelf = DropTarget(ItemTypes.BOOK, shelfTarget, collect)(BookShelf)

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  updateBook
}

const BookShelfContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropBookShelf)

export default BookShelfContainer
