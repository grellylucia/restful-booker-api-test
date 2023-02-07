import chai, { assert, expect } from "chai";
import authApi from "$pages/auth.api";
import * as data from "$data/auth.data";
import jsonSchema from "chai-json-schema";
import * as schema from "$schema/create-token.schema"

chai.use(jsonSchema)

describe('Create token', () => {

    it('Should successfully returns a token', async () => {
        const response = await authApi.createToken(data.VALID_AUTH)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_AUTH_RESPONSE_SCHEMA)
    });

    it('Create token with username registed & password not registed', async () => {
        const response = await authApi.createToken(data.INVALID_AUTH_PASSWORD_NOT_REGISTED)

        assert.equal(response.status, 200)
        assert.equal(response.data.reason, "Bad credentials")
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_PASSWORD_NOT_REGISTED_RESPONSE_SCHEMA)
    });

    it('Create token with username not registed & password not registed ', async () => {
        const response = await authApi.createToken(data.INVALID_AUTH_USERNAME_NOT_REGISTED)

        assert.equal(response.status, 200)
        assert.equal(response.data.reason, "Bad credentials")
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_USERNAME_NOT_REGISTED_RESPONSE_SCHEMA)

})
})