import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../redux/taskSlice';
import { useState } from 'react';

export default function EditTask() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const task = useSelector((state) =>
    state.tasks.list.find((t) => t.id === parseInt(id))
  );

  const [status, setStatus] = useState(task?.completed || false);

  const handleUpdate = () => {
    if (task) {
      const updatedTask = { ...task, completed: status };
      dispatch(updateTask(updatedTask));
      navigate('/');
    }
  };

  if (!task) {
    return <p className="text-red-500 text-center">Task not found</p>;
  }

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4 text-center">✏️ Edit Task</h2>

      <p className="mb-4">
        <span className="font-semibold">Title:</span> {task.title}
      </p>

      <div className="mb-6 flex items-center space-x-3">
        <input
          type="checkbox"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
          className="w-5 h-5 text-yellow-500"
        />
        <span className="text-gray-700">Mark as Completed</span>
      </div>

      <button
        onClick={handleUpdate}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full transition duration-200"
      >
        💾 Save Changes
      </button>
    </div>
  );
}

