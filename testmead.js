// const tasks = {
//     tasks: [{
//         text: 'Grocery shopping',
//         completed: true
//     },{
//         text: 'Clean yard',
//         completed: false
//     }, {
//         text: 'Film course',
//         completed: false
    
//   }],
   
//   getTasksToDo() {
//       return this.tasks.filter((task)=>
//           task.completed === false
//       )
//   }
// }

// console.log(tasks.getTasksToDo())

// setTimeout(()=>{
// },2000)


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!



// const add = function(a,b,callback){
//       setTimeout(()=>{
//           callback(a+b)
//       },2000)   
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })



// console.log("1")

// setTimeout(()=>{
//        console.log("2")
//            }) 


// console.log("3")

var arr = ["A1","A4","A2"]
console.log(arr.sort())

// Booking.find({flightDate:date})
    // .select("-_id -createdAt")
    // .then(results=>{
    //     return res.status(200).json(results)
    // }).catch(err=>{
    //     return res.status(404).json({error: "No Booking Found"})
    // })

    // Booking.find({},
    //     {bookingId:1,contact:1,seats:1,_id:0})
    //     .sort({"seats":1})
    //     .then(results=>{
    //             return res.status(200).json(results)
    //         }).catch(err=>{
    //             return res.status(404).json({error: err})
    //         })