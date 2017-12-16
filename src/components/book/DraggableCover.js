import React from 'react'
import {DragSource} from 'react-dnd'
import {Map} from 'immutable'
import Cover from './Cover'
import ItemTypes from '../../config/dragDropTypes'

const coverSource = {
  beginDrag (props) {
    return {
      book: props.book
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class DraggableCover extends React.PureComponent {
  render () {
    const { connectDragSource, book, detailed, isDragging } = this.props

    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        <Cover book={book} detailed={detailed} />
      </div>
    )
  }
}

DraggableCover.propTypes = {
  book: React.PropTypes.instanceOf(Map),
  detailed: React.PropTypes.bool,
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.BOOK, coverSource, collect)(DraggableCover)
