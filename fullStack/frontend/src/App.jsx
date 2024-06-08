import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setjokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((responce)=>{
    setjokes(responce.data)
  })
  .catch((error)=>{
    console.log(error)
  })
},[])

  return (
   <>
   <h1> auther : sanju </h1>
   <p>JOKES : {jokes.length}</p>

  
  {
    jokes.map((jocks ,index)=>(
      <div key={jocks.id}>
        <h3>{jocks.titel}</h3>
        <h5>{jocks.content}</h5>
      </div>
    ))
  }

   </>
  )
}

export default App
