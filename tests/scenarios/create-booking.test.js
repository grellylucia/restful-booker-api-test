import chai, { assert, expect } from "chai";
import bookingAPI from "$pages/booking.api";
import * as data from "$data/booking.data";
import jsonSchema from "chai-json-schema";
import * as schema from "$schema/create-booking.schema";


chai.use(jsonSchema)

describe ('Create New Booking',() => {
    it('Successfull Create New Booking', async () => {
        const response = await bookingAPI.createBoking(data.VALID_CREATE_BOOKING)

        console.log(response.data.bookingid, "============");

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_CREATE_BOOKING_RESPONSE_SCHEMA)
    
 
    });
})