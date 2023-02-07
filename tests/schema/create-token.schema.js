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

export const INVALID_AUTH_PASSWORD_NOT_REGISTED_RESPONSE_SCHEMA = {
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

export const INVALID_AUTH_USERNAME_NOT_REGISTED_RESPONSE_SCHEMA ={
    "type": "object",
    "default": {},
    "title": "Root Schema",
    "required": [
        "reason"
    ],
    "properties": {
        "username": {
            "type": "string",
            "default": ""
        }
    }
}