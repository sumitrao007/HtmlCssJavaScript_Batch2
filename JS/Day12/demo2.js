
//user defined function
// 1 function without parameter & without return type
// 2 function with parameter & without return type
// 3 function without parameter & with return type
// 4 function with parameter & with return type

// 1 function without parameter & without return type
function add1(){
  console.log("type 1 function is called");
}

// add1();


// 2 function with parameter & without return type
function add2(a,b){
  console.log("Addition is "+(a+b));
}

// add2(2,3);

// 3 function without parameter & with return type

function add3(){
  return (8+8);
}

let res1=add3();
// console.log("Result is "+res1);

// 4 function with parameter & with return type

function add4(a,b){
  return (a+b);
}

let res2=add4(5,6);
console.log('Addition is '+res2)
console.log("Addition is => "+add4(7,7));
