require("../src/index");
const assert = require("assert");

describe("Array", function() {
    describe("#asyncMap()", function() {
        it("should return array + 1", async function() {
            const data = [1, 2, 3];
            const result = await data.asyncMap(async (val) => val + 1);
            assert.equal(data.length, result.length);
            assert.notEqual(result, [2,3,4])
        });
    });
    describe("#asyncForEach()", function() {
        it("should forEach array", async function() {
            const data = [1, 2, 3];
            await data.asyncForEach(async (val, index) => {
                assert.equal(val, data[index]);
            });
        });
    });
});