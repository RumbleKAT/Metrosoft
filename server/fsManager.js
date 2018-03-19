const fs = require('fs');

exports.readFile = function (str , dir){
    var result = '';
    const directory = checkIndex(dir);

    try{
        result = fs.readFileSync("database/" + directory + str + ".json", "utf8");
    }catch(err){
        result = err;
    }
    return result;
}


function checkIndex(str){
    if(str.indexOf("01") != -1 ){
        return "/Introduce/";
    }else if(str.indexOf("02") != -1){
        return "/Business/";
    }else if(str.indexOf("03") != -1){
        return "/Product/";
    }else if(str.indexOf("04") != -1){
        return "/Customer/";
    }
}
