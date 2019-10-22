export const getIsFetching = state => state.user.isFetching;
export const getIsFetchingProfile = state => state.user.isFetchingProfile;
export const getList = state => state.user.data;
export const getProfile = state => state.user.profile;
export const getUser = state => index => state.user.data[index];
export const getTotalFollowing = state => {
    return Object.keys(state.user.data).filter((key) => {
        return state.user.data[key].following
    }).length;
}