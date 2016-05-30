import { connect } from 'react-redux';

import Library from '../components/Library';
import * as actionCreators from '../action-creators';

const mapStateToProps = (state) => ({
  library: state.get('library')
});

const LibraryContainer = connect(
  mapStateToProps,
  actionCreators
)(Library);

export default LibraryContainer;
