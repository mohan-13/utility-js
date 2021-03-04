const max=require('./max');
describe("Max",()=>{
    test('max([1,2,3,4]) should return 4',()=>{
        expect(max([1,2,3,4])).toBe(4);
    })

    test('max([]) should return undefined',()=>{
        expect(max([])).toBe(undefined);
    })
});