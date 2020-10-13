/*
document.write("<br/>");
document.write("CLOSURES");
document.write("<br/>"); 

function fun1(){
    var a = "Hello";
function fun2(){
    var b = "Mark";
    document.write(a+" "+b);
    //fun2 is a closure inside a function
}
    return fun2();
}

fun1();
//closures are functions defined inside other functions but have access to the parent function variables as well as the global variables.
*/