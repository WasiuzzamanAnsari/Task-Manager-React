import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taskList = useSelector((state) => state.tasks.list);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== '') {
      const newTask = {
        id: taskList.length + 1000, // keep ID unique
        title: title,
        completed: false,
      };

      dispatch(addTask(newTask));
      navigate('/');
    } else {
      alert('Please enter a task title!');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-green-700 text-center">➕ Add New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="What's the task?"
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          ✅ Add Task
        </button>
      </form>
    </div>
  );
}
