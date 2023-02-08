import chai, { assert } from "chai";
import bookingAPI from "$pages/booking.api";

describe ( 'Delete booking positif case',() => {
    it('Succesfull Delete Booking by id registed', async () => {
        const response = await bookingAPI.deleteBooking(5153)

        assert.equal(response.status, 201)
        assert.equal(response.data, "Created")
    
    })
}) 

describe ( 'Delete booking negatif case',() => {
    it('Succesfull Delete Booking by id not registed', async () => {
        const response = await bookingAPI.deleteBooking(1)

        assert.equal(response.status, 405)
        assert.equal(response.data, "Method Not Allowed")
    
    })
}) 