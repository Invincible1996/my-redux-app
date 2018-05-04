
import BaseContainer from '../container/BaseContainer'
import { connect } from 'react-redux'
export default (mapStateToProps, mapDispatchToProps) => (Comp) => {
    return connect(mapStateToProps, mapDispatchToProps)(BaseContainer()(Comp))
}