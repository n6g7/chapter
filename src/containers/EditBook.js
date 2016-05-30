import { connect } from 'react-redux';

import EditBook from '../components/EditBook';
import * as actionCreators from '../action-creators';

const mapStateToProps = (state, props) => ({
  book: state.getIn(['library', 'books']).find(book => book.get('uuid') === props.params.uuid)
});

const EditBookContainer = connect(
  mapStateToProps,
  actionCreators
)(EditBook);

export default EditBookContainer;
