import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import AddTodo from '../components/AddTodo'

// const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
// })
  
const mapDispatchToProps = {
    addTodo, 
}

export default connect(null, mapDispatchToProps)(AddTodo)