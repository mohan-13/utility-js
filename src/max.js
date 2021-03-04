function maxRecursive(array,index,maxval)
{
    if(index==array.length)
    {
        return maxval;
    }
    if(array[index]>maxval)
    {
        maxval=array[index];
    }
    return maxRecursive(array,index+1,maxval);

}
const max=(array)=>{
    return array.length?maxRecursive(array,1,array[0]):undefined;
}
module.exports=max;