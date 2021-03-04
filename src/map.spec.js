const utility=require('./utility')
const map=require('./map');
describe('Map',()=>{
    test('map([],cube) should return []',()=>{
        expect(map([],utility.cube)).toEqual([]);
    });

    test('map([1,2,3],cube) should return [1,8,27]',()=>{
        expect(map([1,2,3],utility.cube)).toEqual([1,8,27]);
    });

    test('map([],identity) should return []',()=>{
        expect(map([],utility.identity)).toEqual([]);
    });

    test('map([1,2,3],identity) should return [1,2,3]',()=>{
        expect(map([1,2,3],utility.identity)).toEqual([1,2,3]);
    });

    test('map([1,2,3],identity) should return [1,2,3]',()=>{
        expect(map([1,2,3],utility.identity)).toEqual([1,2,3]);
    });

    test('map([{x:10},{x:20}],o=>o.x+1) should return [11,21]',()=>{
        expect(map([{x:10},{x:20}],o=>o.x+1)).toEqual([11,21]);
    });
});

