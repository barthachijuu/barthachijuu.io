import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from '../modules/HomeActions';
import Home from './Home';

const getInfo = state => state.Home.info;

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(HomeActions, dispatch),
});

const mapStateToProps = state => ({
  info: getInfo(state),
  enhancers: state.enhancers,
});
export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  router: ownProps,
  actions: dispatchProps,
}))(Home);
