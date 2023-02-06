import BaseAPI from "$pages/base.api";
import AuthorizeAPI from "$pages/authorize.base.api";

const bookingApi = {
    updateBooking : (id, payload) => AuthorizeAPI.put(`/booking/${id}`, payload)
}

export default bookingApi;