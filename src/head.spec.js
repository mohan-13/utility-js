const head = require('./head');
describe("Head", () => {
    test("head([1,2,3]) should be 1",()=>{
        expect(head([1,2,3])).toBe(1);
    });

    test("head([]) should be undefined",()=>{
        expect(head([])).toBeUndefined();
    });

});