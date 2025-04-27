import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)
  const actors=[
    "Shakib","Bapparaj","Rubel","Jasim"
  ]

  const singers= [
    {id:1 , name:"Dr Mahfujur Rahman",age:68},
    {id:2 , name:"Eva Rahman",age:28},
    {id:3 , name:"Shuvro Dev",age:38},
    {id:4 , name:"Pritom",age:18},

  ]

  return (
    <>
    {
      actors.map(actor=><Actor name={actor}></Actor>)
    }
     {
      singers.map(singer=> <Singer x={singer} />)
     }

    <Device name="Mobile" price="20"></Device>
    <Device name="Leptop" price="40"></Device>
    <Device name="Watch"  price="15"></Device>

    <Person></Person>
     <Student grade="7" score="70"></Student>
     <Student grade={12} score="98"></Student>
     <Student></Student>

     <Devloper></Devloper>
       
       <Todo task="Learn React" IsDone={true}></Todo>
       <Todo task="Core Concept" IsDone={false}></Todo>
       <Todo task="Try Jsx" IsDone={true}></Todo>

       <Actor name></Actor>
       

    </>
  )
}
function Device(props){
  return <h2>This  device is:{props.name}.Price is:{props.price} </h2>
}
function Person(){
  const age=33;
  const money=99;
  const person={name:"Shakib",age:34}

  return <h3>I am the {person.name} with age:{age}</h3>
}
//default valuea set in props
function Student({grade=1,score=0}){
  return <div className='student'>
    <h1>I am a Student</h1>
    <h2>Name:Saif</h2>
    <h3>Class:{grade}</h3>
    <h3>Score:{score}</h3>
  </div>
}
function Devloper(){
  const devloperStyle={
    border:"10px solid purple",
    margin:"20px",
    padding:"20px",
    borderRadius:"10px"
  }
  return <div style={devloperStyle}>
    <h2>Devu devu</h2>
    <h5>Coding </h5>
  </div>
}

export default App
