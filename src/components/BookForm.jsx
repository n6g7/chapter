import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';

export default React.createClass({
  displayName: 'BookForm',
  mixins: [PureRenderMixin],
	propTypes: {
    onSubmit: React.PropTypes.func,
    book: React.PropTypes.object,
    label: React.PropTypes.string
  },
  handleSubmit: function() {
    this.props.onSubmit(Map({
      title: document.getElementById('title').value,
      ISBN: document.getElementById('isbn').value,
      state: document.getElementById('state').value,
      startDate: document.getElementById('startDate').value,
      endDate: document.getElementById('endDate').value
    }));
  },
  render: function() {
    const book = this.props.book;
    const label = this.props.label || 'Submit';

    return <form onSubmit={this.handleSubmit}>
      <div className="item">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={book.title}/>
      </div>
      <div className="item">
        <label htmlFor="isbn">ISBN</label>
        <input type="text" id="isbn" value={book.ISBN}/>
      </div>
      <div className="item">
        <label htmlFor="state">State</label>
        <select id="state" value={book.state}>
          <option value="stock">Stock</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
        </select>
      </div>
      <div className="item">
        <label htmlFor="startDate">Start date</label>
        <input type="date" id="startDate" value={book.startDate}/>

        <label htmlFor="endDate">End date</label>
        <input type="date" id="endDate" value={book.endDate}/>
      </div>
    </form>;
  }
});
