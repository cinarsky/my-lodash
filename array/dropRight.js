module.exports = (arr, num=1) => {
    if(num>arr.length) {
        arr.splice(0,arr.length)
    }else{
        arr.splice(arr.length-num,num)
    }
    return arr
}
