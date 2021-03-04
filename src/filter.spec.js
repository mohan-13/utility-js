const filter=require('./filter');
const utility=require('./utility');
describe('Filter',()=>{
    test('filter([],x=>true) should give []',()=>{
        expect(filter([],x=>true)).toEqual([]);
    });

    test('filter([1,2,3],x=>true) should give [1,2,3]',()=>{
        expect(filter([1,2,3],x=>true)).toEqual([1,2,3]);
    });

    test('filter([1,2,3],x=>false) should give []',()=>{
        expect(filter([1,2,3],x=>false)).toEqual([]);
    });

    test('filter([0,1,2,3],x=>x>1) should give [2,3]',()=>{
        expect(filter([0,1,2,3],x=>x>1)).toEqual([2,3]);
    });

    test('filter([a,B,c,D,e,f],filterUpperCase) should give [B,D]',()=>{
        expect(filter(['a','B','c','D','e','f'],utility.filterUpperCase)).toEqual(['B','D']);
    });
});