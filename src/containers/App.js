import { connect } from 'react-redux';

import App from '../components/App';
import * as actionCreators from '../action-creators';

const mapStateToProps = state => ({
  library: state.get('library')
});

const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);

export default AppContainer;
