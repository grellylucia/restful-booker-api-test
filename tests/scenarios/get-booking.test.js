import chai, { assert } from "chai";
import bookingAPI from "$pages/booking.api";

describe ( 'Get Booking',() => {
    it('Succesfull get booking registed', async () => {
        const response = await bookingAPI.getBooking(3)

        assert.equal(response.status, 200)
    
    })
}) 