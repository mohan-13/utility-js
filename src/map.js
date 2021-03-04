const map=(array,func)=>{
    var result=[];
    for(var item of array)
    {
        result.push(func(item));
    }
    return result;

};
module.exports=map;