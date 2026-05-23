const fs=require('fs')
const filePath="./tasks.json";


const loadTask=()=>{

    try {
        const dataBuffer=fs.readFileSync(filePath);
        const dataJSON=dataBuffer.toString();
        return   JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }


}
const saveTasks=(tasks)=>{

       const dataJson= JSON.stringify(tasks);
     fs.writeFileSync(filePath,dataJson)
        
  

}

const addTask=(task)=>{
    const tasks=loadTask();
    tasks.push(task)
    saveTasks(tasks);
    console.log("tasks added ")


}

const command=process.argv[2]
const argument=process.argv[3]

if(command==='add'){
    addTask(argument)
}
else if(command==='list'){
    listTasks()
}
else if(comand==='remove'){
    removeTask(parseInt(argument));
}else{
    console.log("comand not found");
}