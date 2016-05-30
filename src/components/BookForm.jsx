import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';

import Book from './Book';

export default React.createClass({
  displayName: 'BookForm',
  mixins: [PureRenderMixin],
  propTypes: {
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func,
    book: React.PropTypes.object
  },
  getInitialState: function() {
    return this.props.book;
  },
  handleChange: function() {
    this.setState({
      title: document.getElementById('title').value,
      ISBN: document.getElementById('isbn').value,
      state: document.getElementById('state').value,
      startDate: document.getElementById('startDate').value,
      endDate: document.getElementById('endDate').value
    });

    this.props.onChange(this.state);
  },
  handleSubmit: function() {
    this.props.onSubmit(Map(this.state));
  },
  render: function() {
    return <div className="bookForm">
      <Book book={this.state}/>
      <form onSubmit={this.handleSubmit}>
        <div className="item half">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            id="isbn"
            value={this.state.ISBN}
            placeholder="000-0-000-00000-0"
            onChange={this.handleChange}
          />
        </div>
        <div className="item half">
          <label htmlFor="state">Status</label>
          <select
            id="state"
            value={this.state.state}
            onChange={this.handleChange}
          >
            <option value="stock">Stock</option>
            <option value="reading">Reading</option>
            <option value="read">Read</option>
          </select>
        </div>
        <div className="item full">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="item half">
          <label htmlFor="startDate">Start date</label>
          <input
            type="date"
            id="startDate"
            value={this.state.startDate}
            placeholder="YYYY-MM-DD"
            onChange={this.handleChange}
          />
        </div>
        <div className="item half">
          <label htmlFor="endDate">End date</label>
          <input
            type="date"
            id="endDate"
            value={this.state.endDate}
            placeholder="YYYY-MM-DD"
            onChange={this.handleChange}
          />
        </div>
      </form>
    </div>;
  }
});
