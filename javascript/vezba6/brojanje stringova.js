function counter (string){
 var counter=0;
 for (var i=0; i<string.length; i++){

if ( string[i]==="a" || string[i]==="e" || string[i]==="i" ||string[i]==="o" || string[i]==="u"){
  counter++
      }
  
 }

return counter

}
function maxCounter(str1,str2,str3,str4,str5) {

var str1c=counter(str1)
var str2c=counter(str2)
var str3c=counter(str3)
var str4c=counter(str4)
var str5c=counter(str5)


var max= str1c;
if (max<str2c) {
  max=str2
  result=str2
}

if (max<str) {
  max=str3
  result=str2
}

if (max<str) {
  max=str4
  result=str2
}

if (max<str) {
  max=str5
  result=str2
}


}

console.log(counter("Hello world", "dsfasd", "dsfsadfg gsd"))