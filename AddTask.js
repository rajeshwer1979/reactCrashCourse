import { useState } from "react"

const AddTask = ({onAdd}) => {

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false);

const onSubmit =(e) => {
    e.preventDefault();

    if(!text){
        alert('Please add a task')
        return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)

}


    return (
        <form className="add-from" onSubmit={onSubmit}>
            <div className="add-form">
                <div className="mb-3 row">
                    <label>Task</label>
                     <input className="form-control" type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />   
                </div>
                <div className="mb-3 row">
                    <label>Day & Time</label>
                     <input className="form-control" type="date" placeholder="Add Day & Time"  value={day} onChange={(e) => setDay(e.target.value)} />   
                </div>
                <div className="mb-3 row">
                    <label>Set Reminder</label>
                     <input className="form-check-input" type="checkbox" placeholder="Set Reminder"  value={reminder} onChange={(e) => setReminder(e.target.value)}/>   
                </div>
                <div className="mb-3 row">                     
                     <input className="btn btn-primary" type="submit" placeholder="Save Task"  />   
                </div>
            </div>
        </form>
    )
}

export default AddTask