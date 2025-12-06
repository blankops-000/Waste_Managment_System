import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-md">
              <span className="text-white text-2xl font-bold">♻</span>
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              EcoTrack
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-2">
            <Link
              to="/reports"
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-all"
            >
              Reports
            </Link>
            <Link
              to="/map"
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-all"
            >
              Map
            </Link>
            <Link
              to="/contribute"
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-all"
            >
              Contribute
            </Link>

            {user ? (
              <Link
                to="/create-report"
                className="ml-2 px-5 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all font-medium"
              >
                + New Report
              </Link>
            ) : (
              <Link
                to="/login"
                className="ml-2 px-5 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl hover:shadow-lg transform hover:-translate-y-1 transition-all font-medium"
              >
                Login
              </Link>
            )}

            {user?.email === 'admin@example.com' && (
              <Link
                to="/admin/dashboard"
                className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-2xl hover:bg-gray-900 transition-all font-medium"
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
