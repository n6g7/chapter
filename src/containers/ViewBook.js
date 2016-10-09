import { connect } from 'react-redux';

import ViewBook from '../components/drawer/ViewBook';
import * as actionCreators from '../action-creators';

const mapStateToProps = (state, props) => ({
  book: state.getIn(['library', 'books']).find(book => book.get('uuid') === props.params.uuid)
});

const ViewBookContainer = connect(
  mapStateToProps,
  actionCreators
)(ViewBook);

export default ViewBookContainer;
