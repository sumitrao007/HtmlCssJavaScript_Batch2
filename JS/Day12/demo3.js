
// Anonymous Function
// function does not have any name that func. is called Anonymous Function

  let temp1=function (){
    console.log("Anonymous Function is called")
  }

  // temp1();

  let temp2=function (a,b){
    return (a+b);
  }

      let res1=temp2(4,5);
      // console.log('Addition is '+res1);

      //Fat Arrow Function/Arrow function

       let temp3= ()=>{
          console.log("Fat Arrow function is called..")
        }

        // temp3();

       let temp4= (a,b)=>{
          return (a+b)
        }
        
        let res2=temp4(3,6);
        console.log('Result is '+res2)