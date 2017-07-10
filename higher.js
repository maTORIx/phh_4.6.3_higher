function myHigherFunction(func) {
    console.log("my higher function");
    func()
}

function outsideFunction() {
    console.log("outsideFunction");
}

myHigherFunction(outsideFunction);
