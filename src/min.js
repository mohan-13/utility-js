function minRecursive(array,index,minval)
{
    if(index==array.length)
    {
        return minval;
    }
    if(array[index]<minval)
    {
        minval=array[index];
    }
    return minRecursive(array,index+1,minval);

}
const min=(array)=>{
    return array.length?minRecursive(array,1,array[0]):undefined;
}
module.exports=min;