function myHigherFunction(func) {
    console.log("my higher function");
    return outsideFunction
}

function outsideFunction() {
    console.log("outsideFunction");
}

let returnValue = myHigherFunction();//outsidefunctionは呼び出していない(カッコがついていない)
returnValue();