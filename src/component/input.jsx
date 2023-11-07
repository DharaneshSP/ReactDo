

import React, { useState } from 'react'

const input = ({onAdd}) => {

    const [text,setTask] =useState([])


        // const inputhey = document.getElementById("hey");



  return (

    <div  className='input-container'>
      
    
        <input id='hey' className='input-box' value={text} onChange={ (e)=> setTask(e.target.value) }   onKeyPress={ (e)=> { (e.key=='Enter')? ( onAdd(text) , setTask([]) )  : '' }}   placeholder='Add Task'></input>
        <button className='Add' onClick={()=>{onAdd(text); setTask([]) }} >Add</button>
       
    </div>

  )
}

export default input
