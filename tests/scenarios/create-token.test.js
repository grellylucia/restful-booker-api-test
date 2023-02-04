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
        expect(response.data).to.be.jsonSchema(schema.VALID_RESPONSE_SCHEMA)
    });
})