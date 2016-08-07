import { connect } from 'react-redux';

import NewBook from '../components/NewBook';
import * as actionCreators from '../action-creators';

const mapStateToProps = (state, props) => ({
  state: props.params.type
});

const NewBookContainer = connect(
  mapStateToProps,
  actionCreators
)(NewBook);

export default NewBookContainer;
