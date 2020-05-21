
module.exports = (obj, ...args) => {
    args.forEach(it => {
        for (val in it) {
            obj[val] = it[val]
        }
    })
    return obj
}
