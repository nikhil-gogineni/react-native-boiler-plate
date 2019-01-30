import { connect } from 'react-redux';
import Home from './home.component'
import { fetchInitialData } from './home.actions'

const mapStateToProps = (state) => {
    return {
        home: state.homeReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialData: () => dispatch(fetchInitialData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);