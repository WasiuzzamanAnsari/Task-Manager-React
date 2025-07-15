import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
          <h1 className="text-3xl font-semibold text-center mb-6 text-blue-700">
            📝 Task Manager
          </h1>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Home
            </Link>
            <Link to="/add" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Add Task
            </Link>
          </div>

          {/* Pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
