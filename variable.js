function a(){
    console.log("a="+myvar);
}
function b(){
    var myvar =2;
    a();
    console.log("b="+myvar);
}

b();