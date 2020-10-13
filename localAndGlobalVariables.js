/*
document.write("<br/>");
document.write("LOCAL AND GLOBAL VARIABLES");
document.write("<br/>"); 

var y = 90;
//y=30 is a global variable

function fun1(){
    var x = 20;
    //x=20 is a local variable only to fun1 function.
    document.write("Inside fun1 x:"+x+"<br/>");
    //var a=30 cannot be used in fun1 because it is a local variable to fun2
    document.write("Inside fun1 y:"+y+"<br/>");
    //fun1 also has access to the global variables (ie y=30)
    
    function fun2(){
    var a = 30;
    //a=30 is a local variable only to fun1 function.
    document.write("Inside fun2 a:"+a+"<br/>");
    //var x=20 cannot be used in fun2 because it is a local variable to fun1
    document.write("Inside fun2 y:"+y+"<br/>");
    //fun2 also has access to the global variables (ie y=30)
    }
    return fun2();
}
fun1();
document.write("Outside fun1 && fun2 y:"+y+"<br/>");
*/