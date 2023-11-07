
import React from 'react'

const deletetoggle = ({tasks ,onDelete,onStrike}) => {

  return (
    <div>      
        <button onClick={ ()=>  onDelete(tasks.id)} >X</button>
        <button  className='button1' onClick={ ()=> onStrike(tasks.id) }  >--</button>
    </div>
  )
}

export default deletetoggle
