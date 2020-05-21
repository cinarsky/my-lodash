module.exports = (arr, ...args) => {
    var process = args[args.length - 1]
    args = args.slice(0, args.length - 1)
    function diff(val) {
        if (process instanceof Function) {
            return process(val)
        }
        return val[process]
    }
    var newArr = arr.slice(0)
    args.forEach(it => {
        it.forEach(item => {
            var idx = newArr.findIndex((ele) =>
                diff(ele) === diff(item))
            if (idx !== -1) {
                newArr.splice(idx, 1)
            }
        })
    })
    return newArr
}
