alert("This is from my Javascript Project");
var name = prompt("what is your name");
console.log(name);
if(name === "null"){
    alert("Your name is empty");
     alert("Hello Guest");
}
else if(name){
    alert("hello " + name);
}
else{
    //do nothing if the name has been inputed.
}
session = confirm("do you want to be successful in life?");
if(session){
    alert("Then you have to work harder in your goals");
}
else{
    alert("You really should work hard anyway!!");
}