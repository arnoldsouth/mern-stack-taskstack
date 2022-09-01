import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { MdOutlineClose } from 'react-icons/md';

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <div className="task-date">
        {new Date(task.createdAt).toLocaleString('en-US')}
      </div>
      <h3>{task.text}</h3>
      <button onClick={() => dispatch(deleteTask(task._id))} className="close">
        <MdOutlineClose />
      </button>
    </div>
  );
}

export default TaskItem;
