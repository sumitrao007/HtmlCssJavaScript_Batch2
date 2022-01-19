
function addition(){
  let inputNum1= document.getElementById("num1").value;
  let inputNum2= document.getElementById("num2").value;

  let res= parseInt(inputNum1)+ parseInt(inputNum2);

  //document.getElementById("mydiv").innerHTML=res;
  let showtext="<h2>Result is ::  "+res+"</h2>"

  document.getElementById("mydiv").innerHTML=showtext;

}