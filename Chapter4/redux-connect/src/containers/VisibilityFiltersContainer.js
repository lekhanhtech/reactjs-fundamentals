import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import VisibilityFilters from '../components/VisibilityFilters'

const mapStateToProps = (state, ownProps) => ({
    activeFilter: state.visibilityFilter
})
  
const mapDispatchToProps = {
    setFilter, 
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters)