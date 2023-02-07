import chai, { assert } from "chai";
import bookingAPI from "$pages/booking.api";

describe ( 'Get Booking ID',() => {
    it('Succesfull get booking by id registed', async () => {
        const response = await bookingAPI.getBookingId(3)

        assert.equal(response.status, 200)
    
    });

    it('Get booking by id not registed', async () => {
        const response = await bookingAPI.getBookingId(10)

        assert.equal(response.status, 200)
    
    })
}) 