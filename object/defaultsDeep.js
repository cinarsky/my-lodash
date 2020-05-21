
module.exports = (obj, args) => {
    args.forEach(it => {
        for (val in it) {
            if (!obj[val]) {
                obj[val] = it[val]
            }
        }
    })
}
