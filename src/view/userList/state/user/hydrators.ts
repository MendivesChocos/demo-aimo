import { UserListModel, UserProfileModel, InputProfileModel, ProfileModel } from '../../model/UserModel';

export const hydrateUserList = (data: UserProfileModel[]): UserListModel => {
    let newData = {} as UserListModel;
    data.forEach(data => {
        newData[(data.id).toString()] = {
            login: data.login,
            id: (data.id).toString(),
            html_url: data.html_url,
            type: data.type,
            avatar_url: data.avatar_url,
            repos_url: data.repos_url,
            site_admin: data.site_admin,
            following: false,
            like: 0,
            unlike: 0
        }
    });
    return newData;
};

export const hydrateProfile = (data: InputProfileModel): ProfileModel => {
    let newData = {
        login: data.login,
        id: data.id,
        avatar_url: data.avatar_url,
        html_url: data.html_url,
        followers_url: data.followers_url,
        following_url: data.following_url,
        gists_url: data.gists_url,
        repos_url: data.repos_url,
        type: data.type,
        name: data.name,
        company: data.company,
        blog: data.blog,
        location: data.location,
        public_repos: data.public_repos,
        followers: data.followers,
        created_at: data.created_at,
        updated_at: data.updated_at
    } as ProfileModel;
    return newData;
}