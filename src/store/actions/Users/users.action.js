import {
    GET_USERS_BY_PAGE,
    LOADING
} from '../index';

import userService from 'api/user.services';

export const getPageUsers = (page) => async (dispatch) => {

    dispatch({
        type: LOADING,
        payload: true
    })

    try {
        const res = await userService.getAll(page);
        dispatch({
            type: GET_USERS_BY_PAGE,
            payload: res.data
        })
        
    } catch (err) {
        console.log(err)
    }
}