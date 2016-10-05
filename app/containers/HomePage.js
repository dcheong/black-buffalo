import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as TodoActions from '../actions/todo';

function mapStateToProps(state) {
  return {
    todos: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
