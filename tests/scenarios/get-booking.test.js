import chai, { assert } from "chai";
import bookingAPI from "$pages/booking.api";

describe ( 'Get Booking',() => {
    it('Succesfull get booking registed', async () => {
        const response = await bookingAPI.getBooking()

        assert.equal(response.status, 200)
    
    });
    
}) 