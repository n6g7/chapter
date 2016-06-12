import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {DragSource} from 'react-dnd';
import {Map} from 'immutable';
import Cover from './Cover';
import ItemTypes from '../../config/dragDropTypes';

const coverSource = {
  beginDrag(props) {
    return {
      book: props.book
    };
  }
};

function collect(connect) {
  return {
    connectDragSource: connect.dragSource()
  };
}

const DraggableCover = React.createClass({
  displayName: 'DraggableCover',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.instanceOf(Map),
    connectDragSource: React.PropTypes.func.isRequired
  },
  render: function() {
    const { connectDragSource } = this.props;

    return connectDragSource(
      <div><Cover book={this.props.book} /></div>
    );
  }
});

export default DragSource(ItemTypes.BOOK, coverSource, collect)(DraggableCover);
