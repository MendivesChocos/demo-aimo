import { serviceUser } from './services';
import * as actionTypes from './actionTypes';

export const toogleFollow = (id: string) => ({
    type: actionTypes.TOGGLE_FOLLOW,
    id
});

export const like = (id: string) => ({
    type: actionTypes.LIKE,
    id
});

export const unlike = (id: string) => ({
    type: actionTypes.UNLIKE,
    id
});

export const fetchUserSucess = (data) => ({
    type: actionTypes.FETCH_USER_SUCESS,
    data
});

export const fetchProfileSucess = (profile) => ({
    type: actionTypes.FETCH_PROFILE_REQUEST,
    profile
});

export const fetchUser = () => {
    return async dispatch => {
        try {
            const data = await serviceUser.get();
            console.log('data', data);
            dispatch(fetchUserSucess(data))
        } catch (e) {
            console.log('error');
        }
    }
}

export const fetchProfile = (user) => {
    return async dispatch => {
        try {
            const data = await serviceUser.getUser(user);
            console.log('profile', data);
            dispatch(fetchProfileSucess(data))
        } catch (e) {
            console.log('error');
        }
    }
}