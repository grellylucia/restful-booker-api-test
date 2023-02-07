import chai, { assert, expect } from "chai";
import bookingApi from "$pages/booking.api";
import jsonSchema from "chai-json-schema";
import * as schema from "$schema/partial-update-booking.schema";
import * as data from "$data/booking.data";

chai.use(jsonSchema)

describe('Partial Update Booking Test', () => {

    it('Should success patrial update booking data with valid booking id', async () => {
        const response = await bookingApi.partialUpdateBooking(2, data.PARTIAL_UPDATE_BOOKING)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_PARTIAL_UPDATE_BOOKING_RESPONSE_SCHEMA)
    })
})