import BaseAPI from "$pages/base.api";

const authApi = {
    createToken : (data) => BaseAPI.post('/auth', data)
}

export default authApi;