const reduce=require('./reduce');
describe('Reduce',()=>{
    test('',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc')
    });

    test('',()=>{
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc')
    });

    test('',()=>{
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10)
    });

    test('',()=>{
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });
});