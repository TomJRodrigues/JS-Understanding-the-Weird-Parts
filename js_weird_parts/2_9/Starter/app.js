function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1,2,3,];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

function limiterVariable(limitNumber){
    return checkPastLimit.bind(this, limitNumber);
}

var arr4 = mapForEach(arr1, limiterVariable(2));

console.log(arr4);