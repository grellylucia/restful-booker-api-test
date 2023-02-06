export const VALID_AUTH_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "token"
    ],
    "properties": {
        "token": {
            "type": "string",
            "default": ""
        }
    }
}

export const INVALID_AUTH_RESPONSE_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "reason"
    ],
    "properties": {
        "reason": {
            "type": "string",
            "default": ""
        }
    }
}