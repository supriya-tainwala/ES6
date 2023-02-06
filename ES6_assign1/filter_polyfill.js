//filter polyfill
let arr=[1,2,3,4,5,6,7];
function filterpolyfill(arr,mode){
      let newArr=[];
      for(let i=0;i<arr.length;i++)
      {           if(mode(arr[i])){
              newArr.push(arr[i]);
      }
      }
           return newArr;
}


function mode(x)
{
   if(x%2==0)
   return x;
   
}
console.log(filterpolyfill(arr,mode));