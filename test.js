// const arr = [1,3,2,9,7]
// const sum = 10;
// const arr2 = []

// function find(arr , sum){
//     for(i=0;i<arr.length;i++){                        
//          for(j=i+1;j<arr.length;j++){           
//              if (arr[i] + arr[j] == sum)        
//              {
//                  arr2.push(arr[i]);
//                  arr2.push(arr[j]);
//                  break;
//              }
//          }
//          if(arr2[1]){
//             break;
//         }
//     }
// }

// find(arr , sum);

// console.log(arr2)

// const arr = [1,5,6,2,8,9,14,11]
// const arr2 = [5,6,11,2]
// var arr3 = []

// for(i=0;i<arr2.length;i++)
// {
//   var index =  arr.indexOf(arr2[i])
//    if(!index){
//      console.log("not found")
//    }
//    else{
//        arr3.push(index)
//    }
// }

// for(i=0;i<arr3.length;i++)
// {
//    if(arr3[i]>arr3[i+1])
//    {
//        console.log("not seq")
//        var flag = "X"
//        break;
       
//    }
   
// }
// if(!flag){
//     console.log("seq")
// }



const arr = [-2,4]
const squaredArr = []
for(i=0;i<arr.length;i++)
{
    var square = (arr[i] * arr[i])
   squaredArr.push(square)
}
console.log(squaredArr.sort(function(a, b){return a - b}))