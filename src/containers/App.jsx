import { connect } from 'react-redux';

import App from '../components/App';
import * as actionCreators from '../action-creators';

const mapStateToProps = () => ({});

const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);

export default AppContainer;
