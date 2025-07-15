import { Link } from 'react-router-dom';

export default function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-200">
      <h3 className="text-lg font-bold text-gray-800 mb-2">📝 {task.title}</h3>
      
      <p className="mb-3">
        <span className="font-medium text-gray-600">Status:</span>{' '}
        <span className={task.completed ? 'text-green-600 font-semibold' : 'text-red-500 font-semibold'}>
          {task.completed ? 'Completed ✅' : 'Pending ⏳'}
        </span>
      </p>

      <Link
        to={`/edit/${task.id}`}
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded"
      >
        ✏️ Edit
      </Link>
    </div>
  );
}
