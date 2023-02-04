import BaseAPI from "$pages/base.api";

const pingApi = {
    healthCheck : () => BaseAPI.get('/ping')
}

export default pingApi;