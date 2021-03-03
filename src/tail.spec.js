const tail=require('./tail');
describe("Tail",()=>{
    test("tail([1,2,3]) should return [2,3]",()=>{
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    test("tail([]) should return []",()=>{
        console.log(tail(123456));
        expect(tail(123456)).toEqual([]);
    });

});