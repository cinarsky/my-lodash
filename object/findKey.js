
module.exports = (obj, ...args) => {
    if (args instanceof Function){
        for (key in obj){
            if(args(obj[key])){
                return key
            }
        }
    }
    if (args instanceof Object){

    }
    if (args instanceof Array){

    }
    if (args instanceof String){

    }
}
