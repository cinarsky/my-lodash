
module.exports = (obj,args) => {
    var res=[]
    args.forEach(it => {
        var value=obj
        var path=it
        path=path.replace(/\[/g,'.').replace(/\]/g,'').split('.')
        path.forEach(ele => {
            value=value[ele]
        });
        res.push(value)
    })
    return res
}
