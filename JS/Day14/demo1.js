
//Array of Object

let arrObj=[
  {
    fname:'sumit',
    lname:'Raokhande',
    id:9,
    country:{
      cid:1,
      cname:'India'
    },
    month:["jan",'Feb','March'],
    result:[
      {
        sub:'m1',
        marks:45
      },
      {
        sub:'m2',
        marks:55
      },
      {
        sub:'m3',
        marks:65
      }
    ]
  },
  {
    fname:'Kiran',
    lname:'Raokhande',
    id:6,
    country:{
      cid:2,
      cname:'US'
    },
    month:["April",'Feb','May'],
    result:[
      {
        sub:'m1',
        marks:65
      },
      {
        sub:'m2',
        marks:45
      },
      {
        sub:'m3',
        marks:75
      }
    ]
  },
  {
    fname:'Spruha',
    lname:'Raokhande',
    id:3,
    country:{
      cid:3,
      cname:'Japan'
    },
    month:["June",'Aug','Dec'],
    result:[
      {
        sub:'m1',
        marks:40
      },
      {
        sub:'m2',
        marks:70
      },
      {
        sub:'m3',
        marks:85
      }
    ]
  }
];

for(let i=0;i<arrObj.length;i++){
  console.log(`
  ----------------------------------
    First Name :: ${arrObj[i].fname}
    Last Name :: ${arrObj[i].lname}
    ID        :: ${arrObj[i].id}
    Country Name :: ${arrObj[i].country.cname}
    Month     :: ${arrObj[i].month}
    --------Result------------
  `)

  for(let j=0;j<arrObj[i].result.length;j++){
      console.log(`
         Subject :: ${arrObj[i].result[j].sub}
          Marks :: ${arrObj[i].result[j].marks}
      `)
  }

}