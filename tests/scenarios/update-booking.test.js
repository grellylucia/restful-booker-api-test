import chai, { assert, expect } from "chai";
import bookingApi from "$pages/booking.api";
import jsonSchema from "chai-json-schema";
import * as schema from "$schema/update-booking.schema";
import * as data from "$data/booking.data";

chai.use(jsonSchema)

describe('Update booking test', () => {

    it('Should success update booking data with valid booking id', async () => {
        const response = await bookingApi.updateBooking(2, data.UPDATE_BOOKING_DATA)

        assert.equal(response.status, 200)
        assert.equal(response.data.additionalneeds, data.UPDATE_BOOKING_DATA.additionalneeds)
        expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_BOOKING_RESPONSE_SCHEMA)
    });

    it('Should failed update booking data with invalid booking id', async () => {
        const response = await bookingApi.updateBooking(808080, data.UPDATE_BOOKING_DATA)

        assert.equal(response.status, 405)
        assert.equal(response.data, "Method Not Allowed")
    }) 

    
})