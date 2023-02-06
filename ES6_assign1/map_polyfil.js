function mapPolyFill(arr,cb) {
    let newarr= [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(cb(arr[i]));
    }
    return newarr;
}
function sum(x) {
    return x+x;
 }

 console.log(mapPolyFill(arr,sum));