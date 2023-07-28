import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import Todo from '../components/Todo'

// const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
// })
  
const mapDispatchToProps = {
    toggleTodo, 
}

export default connect(null, mapDispatchToProps)(Todo)