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

    return <form className="form-horizontal" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="title" className="col-sm-2 control-label">Title</label>
        <div className="col-sm-10">
          <input type="text" id="title" className="form-control" value={book.title}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="isbn" className="col-sm-2 control-label">ISBN</label>
        <div className="col-sm-10">
          <input type="text" id="isbn" className="form-control" value={book.ISBN}/>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="state" className="col-sm-2 control-label">State</label>
        <div className="col-sm-10">
          <select id="state" className="form-control" value={book.state}>
            <option value="stock">Stock</option>
            <option value="reading">Reading</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="startDate" className="col-sm-2 control-label">Start date</label>
        <div className="col-sm-4">
          <input type="date" id="startDate" className="form-control" value={book.startDate}/>
        </div>
        <label htmlFor="endDate" className="col-sm-2 control-label">End date</label>
        <div className="col-sm-4">
          <input type="date" id="endDate" className="form-control" value={book.endDate}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button
            type="submit"
            className="btn btn-primary"
          >
            {label}
          </button>
        </div>
      </div>
    </form>;
  }
});
