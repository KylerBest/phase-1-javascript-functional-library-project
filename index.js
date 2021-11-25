function forceArr(collection){
    let arr = []
    if(typeof collection === 'object'){
        arr = [...Object.values(collection)]
    }else arr = [...collection]
    return arr
}
function myEach(collection, callback){
    let arr = forceArr(collection)
    for(let i = 0; i < arr.length; i++){
        callback(arr[i])
    }
    return collection
}
function myMap(collection, callback){
    let arr = forceArr(collection)
    for(let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i])
    }
    return arr
}
function myReduce(collection, callback, acc){
    let arr = forceArr(collection)
    if(acc === undefined){
        acc = arr[0]
        arr = arr.slice(1)
    }
    for(let i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i], collection)
    }
    return acc
}
function myFind(collection, callback){
    let arr = forceArr(collection)
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])) return arr[i]
    }
}
function myFilter(collection, callback){
    let arr = forceArr(collection)
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i]))result.push(arr[i])
    }
    return result
}
function mySize(collection){
    let arr = forceArr(collection)
    return arr.length
}
function myFirst(arr, n){
    if(!n || n === 1) return arr[0]
    else{
        let result = []
        for(let i = 0; i < n; i++){
            result.push(arr[i])
        }
        return result
    }
}
function myLast(arr, n){
    if(!n || n === 1) return arr[arr.length-1]
    else{
        let result = []
        for(let i = arr.length-1; i > arr.length-1-n; i--){
            result.push(arr[i])
        }
        return result.reverse()
    }
}
function myKeys(obj){
    let result = []
    for(let key in obj){
        result.push(key)
    }
    return result
}
function myValues(obj){
    let result = []
    for(let key in obj){
        result.push(obj[key])
    }
    return result
}