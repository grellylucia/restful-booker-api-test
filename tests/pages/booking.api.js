import BaseAPI from "$pages/base.api";
import AuthorizeAPI from "$pages/authorize.base.api";

const bookingApi = {
    createBoking : (data) => BaseAPI.post ('/booking', data),
    updateBooking : (id, payload) => AuthorizeAPI.put(`/booking/${id}`, payload),
    getBookingId : (id) => BaseAPI.get (`/booking/${id}`),
    getBooking : (id) => BaseAPI.get (`/booking/${id}`),
    partialUpdateBooking : (id, payload) => AuthorizeAPI.patch(`/booking/${id}`, payload),
    deleteBooking : (id) => AuthorizeAPI.delete(`/booking/${id}`)
}

export default bookingApi;