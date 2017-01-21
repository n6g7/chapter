import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Library from '../library/Library';
import { updateBook } from '../../redux/reducers/library.action';

class Home extends React.PureComponent {
  render() {
    const { children, library, updateBook } = this.props;

    return <div>
      <Library library={library} updateBook={updateBook} />
      { children }
    </div>;
  }
}

Home.propTypes = {
  children: React.PropTypes.element,
  library: React.PropTypes.instanceOf(Map),
  updateBook: React.PropTypes.func.isRequired
};

Home.contextTypes = {
  router: React.PropTypes.object
};

export default Home;

const mapStateToProps = state => ({
   library: state.get('library')
 });

const mapDispatchToProps = {
  updateBook
};

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
