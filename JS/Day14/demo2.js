function Myalert(){
  console.log("My alert is called...")
  alert("Hello Samaj aa raha hai Kya")
}

function MyPrompt(){
  let name=prompt("Naam Enter kar dijiye ");
  // document.write(name);
  let h2Handle=document.getElementById("myname");

  h2Handle.innerHTML="Welcome "+name;
}

function Myconfirm(){
  let res=confirm("Apako Software Install karana Hai Kya???")

  console.log(res);

  if(res){
    alert("Thank U......")
  }else{
    alert("Visit Again.....")
  }

}