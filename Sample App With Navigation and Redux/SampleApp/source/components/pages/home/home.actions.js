import actionTypes from '../../../redux/actions/action-types'


export const fetchInitialData = () => async (dispatch) => {
    dispatch(updateTitleOfHomeScreen("Sample App Home Screen"))
}

const updateTitleOfHomeScreen = (value) => {
    console.log('called')
    return {
        type: actionTypes.UPDATE_HOME_SCREEN_TITLE,
        payload: value
    }
}
