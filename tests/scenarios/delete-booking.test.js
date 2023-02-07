import chai, { assert } from "chai";
import bookingAPI from "$pages/booking.api";

describe ( 'Delete Booking',() => {
    it('Succesfull Delete Booking', async () => {
        const response = await bookingAPI.deleteBooking(6517)
        assert.equal(response.status, 201)
        assert.equal(response.data, "Created")
    
    })
}) 