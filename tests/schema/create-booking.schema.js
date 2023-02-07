export const VALID_CREATE_BOOKING_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "bookingid",
        "booking"
    ],
    "properties": {
        "bookingid": {
            "type": "integer",
            "default": "",
    }
}
}

