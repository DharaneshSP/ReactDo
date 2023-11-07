
import Header from './component/header';
import { useState } from 'react';
import Show from './component/show';
import Input from './component/input';


function App() {

    const [tasklist, setTasklist]= useState([])


    var id = tasklist.length + 1;
    const Addtask = (tasks)=>{

    if(tasks.length>0){
      setTasklist([...tasklist,{text:tasks , id:id , strike:false }])
      id++;
    }

console.log(tasklist);   

};



const deleteTask = (taskid)=>{

    setTasklist(tasklist.filter( (tasks)=> (tasks.id  != taskid)))
  
}



const strike =(taskid) => {
  
  //setTasklist(tasklist.map( (tasks) => ( tasks.id == taskid && tasks.strike==false)?{...tasks,strike:true}:( tasks.id == taskid && tasks.strike==true)?{...tasks  ,strike:false}:null  ))  
  setTasklist(tasklist.map( (tasks)=>  (tasks.id !==taskid) ?tasks:{...tasks,strike:!tasks.strike }))
}


  return (
    <div>
          
          <Header/> 

          <Input  onAdd={Addtask}/>

          <Show tasklist={tasklist}  onDelete={deleteTask}  onStrike={strike}/>
      
    </div>

  );
}


export default App;