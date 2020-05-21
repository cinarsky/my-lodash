module.exports = (arr, ...args) => {
    var newArr=arr.slice(0)
    args.forEach(it=>{
        it.forEach(item=>{
            var idx=newArr.findIndex((ele)=>ele===item)
            if(idx!==-1){
                newArr.splice(idx,1)
            }
        })
    })
    return newArr
}
