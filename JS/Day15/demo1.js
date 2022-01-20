function MyChange(){

  console.log("Change event Occur...");

  let inputname=document.getElementById("myname");

  inputname.style.background='green';
  inputname.style.color='white';
  console.log("data is "+inputname.value);

  document.getElementById("myDiv").innerHTML=inputname.value;

}