import { connect } from 'react-redux';

import ImportExport from '../components/ImportExport';
import * as actionCreators from '../action-creators';

const mapStateToProps = (state) => ({ state });

const ImportExportContainer = connect(
  mapStateToProps,
  actionCreators
)(ImportExport);

export default ImportExportContainer;
