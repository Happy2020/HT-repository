var A = function(){
    console.log('Hello World');
}

function slowfunc(callback){
    callback();
}

slowfunc(A);