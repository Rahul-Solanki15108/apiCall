import {
    GET_USERS_BY_PAGE,
    LOADING
} from 'store/actions';
import React from 'react'

const intialValues = {
    page: 0,
    count: 1,
    rowsPerPage: 5,
    sortOrder: {},
    data: [['Loading Data...']],
    isLoading: true,
}

export default function usersReducer(state = intialValues, action) {

    const { type, payload } = action;

    switch (type) {

        case LOADING:
            return {
                ...state,
                data : [['Loading Data....']],
                isLoading: payload
            }

        case GET_USERS_BY_PAGE:
            return {
                ...state,
                count: payload.total,
                data: payload.data,
                isLoading:false
            }

        default:
            return state;
    }
}
