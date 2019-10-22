import axios from 'axios';
import { UserListModel, ProfileModel } from '../../model/UserModel';
import { hydrateUserList, hydrateProfile } from './hydrators';

export const serviceUser = {
    async get(): Promise<UserListModel> {
        try {
            const { data } = await axios.get("https://api.github.com/users");
            return hydrateUserList(data);
        } catch (e) {
            console.log(e);
            throw Error();
        }
    },
    async getUser(user): Promise<ProfileModel> {
        console.log("user", user);
        try {
            const { data } = await axios.get(`https://api.github.com/users/${user}`);
            console.log("data", hydrateProfile(data));
            return hydrateProfile(data);
        } catch (e) {
            throw Error();
        }
    }
}