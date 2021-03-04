const filter = require("./filter");

const utility={
    cube:function cube(value){
        return value*value*value;
    },

    identity:function identity(value){
        return value;
    },

    filterUpperCase:function filterUpperCase(value)
    {
        return value==value.toUpperCase();
    }



}
module.exports=utility;