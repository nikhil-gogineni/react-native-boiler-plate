import { combineReducers } from 'redux';
import homeReducer from '../../components/pages/home/home.reducer'
import profileReducer from '../../components/pages/profile/profile.reducer'
import globalReducer from './global.reducers'

const rootReducer = combineReducers({
    homeReducer,
    profileReducer,
    globalReducer
});

export default rootReducer;