import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {getTodosByVisibilityFilter} from '../redux/selectors'


const mapStateToProps = state => {
    const { visibilityFilter } = state
    const todos = getTodosByVisibilityFilter(state, visibilityFilter)
    return { todos }
    // const { byIds, allIds } = state.todos || {};
    // const todos =
    //   allIds && allIds.length
    //     ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
    //     : null;
    // return { todos };
  };
  
// const mapDispatchToProps = {
    //Todo
// }

export default connect(mapStateToProps)(TodoList)