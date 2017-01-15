import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import states from '../../config/bookStates';
import ISBNInput from './ISBNInput';
import Button from '../common/Button';
import { reset, setField } from '../../redux/reducers/editor.action';
import saveImg from '../../images/save.png';
import './BookForm.styl';
import Progressbar from '../common/Progressbar';

class BookForm extends PureComponent {
  constructor(props) {
    super(props);
    props.reset(props.initialBook ? props.initialBook : null);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(field) {
    return event => {
      const value = event.target
        ? event.target.value
        : event;

      this.props.setField(field, value);
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.editorBook);
  }

  render() {
    const { children, editorBook } = this.props;

    return <form
      className="bookForm"
      onSubmit={this.onSubmit}
    >
      <Progressbar
        className="item full"
        editable={true}
        onChange={this.onChange('progress')}
        progress={editorBook.get('progress')}
      />
      <div className="item half">
        <label htmlFor="isbn">ISBN</label>
        <ISBNInput
          id="isbn"
          value={editorBook.get('ISBN')}
          onChange={this.onChange('ISBN')}
        />
      </div>
      <div className="item half">
        <label htmlFor="state">Status</label>
        <select
          id="state"
          value={editorBook.get('state')}
          onChange={this.onChange('state')}
        >
          <option value={states.stock}>Stock</option>
          <option value={states.reading}>Reading</option>
          <option value={states.read}>Read</option>
        </select>
      </div>
      <div className="item full">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={editorBook.get('title')}
          onChange={this.onChange('title')}
        />
      </div>
      <div className="item full">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={editorBook.get('author')}
          onChange={this.onChange('author')}
        />
      </div>
      <div className="item half">
        <label htmlFor="startDate">Start date</label>
        <input
          type="date"
          id="startDate"
          value={editorBook.get('startDate')}
          placeholder="YYYY-MM-DD"
          onChange={this.onChange('startDate')}
        />
      </div>
      <div className="item half">
        <label htmlFor="endDate">End date</label>
        <input
          type="date"
          id="endDate"
          value={editorBook.get('endDate')}
          placeholder="YYYY-MM-DD"
          onChange={this.onChange('endDate')}
        />
      </div>

      <nav>
        { children
          ? children
          : <Button type="submit">
              <img src={saveImg} alt="save" />
              Save book
            </Button>
        }
      </nav>
    </form>;
  }
}

BookForm.propTypes = {
  children: React.PropTypes.any,
  editorBook: React.PropTypes.instanceOf(Map),
  initialBook: React.PropTypes.instanceOf(Map),
  onSubmit: React.PropTypes.func,
  reset: React.PropTypes.func.isRequired,
  setField: React.PropTypes.func.isRequired
};

export default BookForm;

const mapStateToProps = (state) => ({
  editorBook: state.get('editor')
});

const mapDispatchToProps = {
  reset,
  setField
};

export const BookFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
