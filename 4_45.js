function arrayWalk(data, f) {
    for(var key in data) {
        f(data[key], key)
    }
}

function showElement(value, key) {
    console.log(key + " : " + value)
}

var ary = [1,2,3,4,5];
arrayWalk(ary,showElement);
// ary.forEach(showElement);