

import React from 'react'
import Segment from './segment'

const show = ({tasklist,onDelete,onStrike}) => {
  return (
    <div>
      
       {

       tasklist.map( (tasks)=>(<Segment tasks={tasks}  onDelete={onDelete} onStrike={onStrike} /> ))

       }   
        
    </div>
  )
}

export default show
