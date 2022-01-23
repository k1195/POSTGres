const arr = [1,3,2,9,7]
const sum = 10;
const arr2 = []

function find(arr , sum){
    for(i=0;i<arr.length;i++){                        
         for(j=i+1;j<arr.length;j++){           
             if (arr[i] + arr[j] == sum)        
             {
                 arr2.push(arr[i]);
                 arr2.push(arr[j]);
                 break;
             }
         }
         if(arr2[1]){
            break;
        }
    }
}

find(arr , sum);

console.log(arr2)