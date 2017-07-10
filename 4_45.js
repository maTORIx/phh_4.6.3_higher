function arrayWalk(data, f) {
    for(var key in data) {
        f(data[key], key)
    }
}

function showElement(value, key) {
    console.log(key + " : " + value)
}

function showDecolatedElement(value, key) {
    console.log(`キー(${key}) : 値(${value})`)
}

var ary = [1,2,3,4,5];
arrayWalk(ary,showDecolatedElement);
// ary.forEach(showElement);