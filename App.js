import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Footer from './components/Footer'
import About from './components/About';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

  const [showAddTasks, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);  
 
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

//Fetch Tasks
const fetchTasks = async (task) => {
  const res = await fetch('http://localhost:5000/tasks/')
  const data = await res.json()
   return data; 
  // console.log(data);
}


//Add Task
const addTask =  async (task) => {
  // console.log(task);
  //  const id = Math.floor(Math.random() * 10000 + 1)
  //  const newTask = {id, ...task}
  //  setTasks([...tasks, newTask])

  const res = await fetch('http://localhost:5000/tasks/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json();
  setTasks([...tasks, data])
  // return data
}


//Delete Task

const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id));
}


// Toggle Reminder

const toggleReminder = async (id) => {
  const taskToggle = await fetchTasks(id)
  const updTask = { ...taskToggle, 
  reminder: !taskToggle.reminder }
  
  const res = await fetch('http://localhost:5000/tasks/', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    }, 
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  // console.log(id);
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !data.reminder } : task ))
}

// const GuestLayout = () => {
//   return (
//     <div>
//       <h1>This is the Guest Layout Page</h1>
//       <Outlet />
//     </div>
//   );
// };

  return (
    <BrowserRouter>
    <div  className="container">
      {/* <Header title='Hello' /> */}
      <Header onAdd={ () => setShowAddTask(!showAddTasks)}   showAdd = {showAddTasks}/>
      <Routes>
        <Route exact path='/' element = {              
         <>
          {showAddTasks && <AddTask onAdd={addTask} />}
          {/* <Tasks tasks={tasks} onDelete={deleteTask} /> */}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
                 </>                
        }
        />     
        
        {/* <Route path="/" element={<GuestLayout />} />  */}
        <Route path='/about' element={About} />

      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

// function App() {

//   const name = 'Brad';
//   const x = true;

//   return (
//     <div className="container p-3">
//       <h1>Hello From React</h1>
//       <h2>Hello {name}</h2>
//       <h3> hello {x ? 'Yes' : 'No'} </h3>
//     </div>
//   );
// }


// import React  from "react";

// class App extends React.Component{
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }


export default App;
