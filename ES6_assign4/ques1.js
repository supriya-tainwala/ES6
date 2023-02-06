const start=5;
const end=100;
let num1=[...Array(end-start+1).keys()].map(x=>x+start)
// console.log(num1)

let new_arr=[...num1].filter((num)=>{
    let flag=0;
   
    for (i = 2; i <= num / 2; ++i) {
    if (num % i == 0) {
      flag = 1;
      break;
    }
  }
  if(flag==0)
  return num;
})


console.log(new_arr);