module.exports = (arr, size) => {
    var res = []
    var length = arr.length
    var numless = length % size
    for (var i = 0; i < length - numless; i = i + size) {
        res.push(arr.slice(i, i + n))
    }
    if (numless) {
        res.push(arr.slice(length - numless, length))
    }
    return res
}