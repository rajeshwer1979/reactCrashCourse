import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
return (
    // setTasks([...tasks,  {}])
    <>
    {tasks.map((task, index) => (
        <Task key={index}
         task={task}
        onDelete={onDelete} 
        onToggle={onToggle}>

        </Task>
        ))}
    </>
  )
}

export default Tasks