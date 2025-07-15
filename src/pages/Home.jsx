import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../redux/taskSlice';
import TaskCard from '../components/TaskCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📋 My Tasks</h2>
        <Link
          to="/add"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          ➕ Add Task
        </Link>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">⏳ Loading tasks...</p>
      ) : list.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet. Try adding one!</p>
      ) : (
        <div className="space-y-4">
          {list.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
