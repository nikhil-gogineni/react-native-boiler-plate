import actionTypes from '../../../redux/actions/action-types';

const initialState = {
    title: ""
}

export default profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_HOME_SCREEN_TITLE: {
            return {
                ...state,
                title: action.payload
            }
        }
        default: return state;
    }
}