// export default function Todo({task}){
//     return (

//         <li>Task : {task}</li>
//     )
// }
//condition rendaring option 1
// export default function Todo({task, IsDone}){
//       if(IsDone === true){
//         return <li>Finished {task}</li>
//       }else{
//         return <li> Work on {task}</li>
//       }
// }
//condition rendaring option 2
// export default function Todo({task, IsDone}){
//       if(IsDone){
//         return <li>Finished {task}</li>
//       }
//       return <li> Work on {task}</li>
      
// }
//condition rendaring option 3 ternariy operator 
// export default function Todo({task,IsDone}){
//     return (

//         <li>{IsDone ? "Finished" : "Work on"}: {task}</li>
//     )
// }
//Condition rendaring option:4
// export default function Todo({task,IsDone}){
//     return (

//         <li> {task} {IsDone && "Done"}</li>
//     )
// }
//Condition rendaring option:4
// export default function Todo({task,IsDone}){
//     return (

//         <li> {task}{IsDone || "Do it"} </li>
//     )
// }

//Condition rendaring option:4
export default function Todo({task,IsDone}){
    let listItem;
    
     if(IsDone){
        listItem=<li>Finished: {task}</li>
     }else{
        listItem= <li>Work on{task}</li>
     }
    return listItem;
}