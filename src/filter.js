const filter=(array,func)=>{
    var result=[];
    for(var item of array)
    {
        if(func(item))
        {
            result.push(item);
        }
    }
    return result;
}
module.exports=filter;