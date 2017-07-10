function myHigherFunction(func) {
    console.log("my higher function");
    return outsideFunction
}

function outsideFunction(value) {
    console.log("value: " + value);
}

let returnValue = myHigherFunction();//outsidefunctionは呼び出していない(カッコがついていない)
// returnValue("value");
myHigherFunction()("value!!!!")