const min=require('./min');
describe("Min",()=>{
    test('min([1,2,3,4]) should return 1',()=>{
        expect(min([1,2,3,4])).toBe(1);
    })

    test('min([]) should return undefined',()=>{
        expect(min([])).toBe(undefined);
    })
});