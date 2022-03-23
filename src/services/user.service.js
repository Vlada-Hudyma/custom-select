import axios from 'axios';

class UserService {
    /**
     * @returns {Promise<AxiosResponse<any>>}
     */
    getUsers() {
        return axios.get('https://60de1565878c890017fa2d5f.mockapi.io/api/v1/users', {crossdomain: true});
    }
}

export default new UserService();
