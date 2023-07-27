import{FaTimes} from 'react-icons/fa'

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}    
    onDoubleClick={() => onToggle(task.id)}>
    <div className="list-group-item">
        <h6>
            {task.text} <FaTimes style={{color:'red', cursor: 'pointer', float:'right'}}
            onClick={ () => onDelete(task.id)}
            />
        </h6>
        <p className="m-0">{task.day}</p>
    </div>
    </div>
  )
}

export default Task