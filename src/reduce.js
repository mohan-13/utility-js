function reduceRecursive(array,currentIndex,func,result)
{
    if(currentIndex==array.length)
    {
        return result;
    }
    result=func(result,array[currentIndex]);
    return reduceRecursive(array,currentIndex+1,func,result);
}
const reduce=(array,func,start=undefined)=>{
    if(start!=undefined)
    {
        return reduceRecursive(array,0,func,start);
    }
    return array.length?reduceRecursive(array,0,func,''):undefined;

}
module.exports=reduce;