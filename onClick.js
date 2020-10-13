document.write("<br/>");
document.write("ON CLICK");
document.write("<br/>"); 


function calculate(){
    alert("This is supposed to work na");
    var x = parseInt(document.calcform.num1.value);
    var y = parseInt(document.calcfom.num2.value);
    var z = document.calcform.result;
    z.value = x+y;
}