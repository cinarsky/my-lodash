
module.exports = (obj, ...args) => {
    args.forEach(it=>{
        Object.keys(it).forEach(key=>{
            obj[key]=it[key]
        })
    })
    return obj
}