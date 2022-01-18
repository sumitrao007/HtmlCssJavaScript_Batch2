
// array is growable & shrinkable dynamically

let a=[4,5,6,8];
let a1=[2.5,'sumit',true];

// for(let i=0;i<a.length;i++){
//   console.log("Value is "+a[i]);
// }

// console.log("Array is "+a);
// console.log("Using Join Method "+a.join("  "));
// console.log("Using Join Method "+a.join("#"));
let a2=[];
// we can insert a data in 2 ways
// 1 using PUSH & POP method
// 2 using Splice method

// 1 using PUSH & POP method
// It works on LIFO Principal
//Last in first out
// a2.push(12);
// console.log(a2)
// a2.push(55);
// console.log(a2)
// a2.push(78);
// console.log(a2)
// a2.push(88,56);
// console.log(a2)
// let temp=a2.pop();
// console.log(a2)
// console.log("Poped data is "+temp);

// 2 using Splice method

let a3=[4,55,28,74,96,32,15]

// a3.splice(2,0,22);
// console.log(a3);
// a3.splice(0,0,45,50,90)
// console.log(a3);
// a3.splice(2,1);
// console.log(a3);
// a3.splice(3,2);
// console.log(a3);

//slice
// It is used to copy a particular data from an array
// & return a new section array 

let a4=[2,7,8,5,6,3,99,74,12,45,88];

// let temp2=a4.slice(2,8);
// console.log("Original data "+a4);
// console.log("Copied data "+temp2);

//map function
let a5=[2,3,4,5,6];

let temp3=a5.map((myvalue,i)=>{

  return (myvalue*myvalue)
})

console.log("Original array "+a5);
console.log("Square value is "+temp3);

