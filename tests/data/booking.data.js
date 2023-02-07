import * as generator from '$helpers/generator'

export const UPDATE_BOOKING_DATA = {
    "firstname": generator.firstName(),
    "lastname": generator.lastname(),
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Starbucks"
}