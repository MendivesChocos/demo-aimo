import * as actionTypes from './actionTypes';

interface State {
    data: any;
    profile?: object
    isFetching: boolean;
    isFetchingProfile?: boolean;
}

const initialState: State = {
    data: {},
    profile: {},
    isFetching: true,
    isFetchingProfile: true
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_SUCESS:
            return {
                ...state,
                data: action.data,
                isFetching: false,
            }
        case actionTypes.FETCH_PROFILE_REQUEST:
            return {
                ...state,
                profile: action.profile,
                isFetchingProfile: false,
            }
        case actionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        case actionTypes.LIKE:
            console.log('action.id', action.id);
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.id]: {
                        ...state.data[action.id],
                        like: state.data[action.id].like + 1
                    }
                }
            }
        case actionTypes.UNLIKE:
            console.log('action.id', action.id);
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.id]: {
                        ...state.data[action.id],
                        unlike: state.data[action.id].unlike - 1
                    }
                }
            }
        case actionTypes.TOGGLE_FOLLOW:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.id]: {
                        ...state.data[action.id],
                        following: !state.data[action.id].following
                    }
                }
            }
        default:
            return state;
    }
}
