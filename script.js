let a = 10
var b = 12
var c = null;
var d;

document.write("Value of a : " + a + "<br>")
document.write("Value of b : " + b + "<br>")
document.write("Value of c : " + c + "<br>")
document.write("Value of d : " + d + "<br>")

function greet(){
var greeting
var time = new Date().getHours()
if(time<10){
greeting="Good Moring"
}
else if(time<17) {
greeting="Good Day"
}
else{
greeting="Good Evening"
}
document.write("The current time is"+time+"The greeting is"+greeting)
}