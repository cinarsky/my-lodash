module.exports = (arr, ...args) => {
    var newArr = arr.slice(0)
    args.forEach(it => {
        if (it instanceof Array) {
            newArr.push(...it)
        } else {
            newArr.push(it)
        }
    })
    return newArr
}