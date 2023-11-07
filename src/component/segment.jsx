
import React from 'react'
import Alter from './delete'

const segment = ({tasks ,onDelete,onStrike}) => {
  return (

    <div className='container'>        
        <div className='display-container'>
                
                <h3 className={`tasks.strike ${tasks.strike?"tasks1":"tasks2"}`} >{tasks.text}</h3> 
      
                 <Alter tasks={tasks} onDelete={onDelete} onStrike={onStrike} />
                 
        </div>

    </div>  
  )
} 

export default segment
