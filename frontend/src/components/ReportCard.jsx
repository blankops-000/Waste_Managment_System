import { Link } from 'react-router-dom';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  in_progress: 'bg-blue-100 text-blue-800',
  resolved: 'bg-green-100 text-green-800'
};

const categoryIcons = {
  plastic: '🧴',
  organic: '🌿',
  electronic: '💻',
  hazardous: '⚠️',
  general: '🗑️'
};

export default function ReportCard({ report }) {
  return (
    <Link to={`/report/${report.id}`} className="block group">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
        
        {/* Image or Icon */}
        {report.image_url ? (
          <div className="relative h-52 overflow-hidden">
            <img
              src={report.image_url}
              alt={report.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[report.status] || 'bg-gray-100 text-gray-800'}`}
              >
                {report.status?.replace('_', ' ').toUpperCase()}
              </span>
            </div>
          </div>
        ) : (
          <div className="h-52 bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center">
            <span className="text-6xl">{categoryIcons[report.category] || '🗑️'}</span>
          </div>
        )}

        {/* Card Content */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{categoryIcons[report.category] || '🗑️'}</span>
            <span className="text-xs font-semibold text-emerald-600 uppercase">{report.category}</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">{report.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{report.description}</p>
          {report.location_text && (
            <div className="flex items-center text-gray-500 text-xs">
              <span className="mr-1">📍</span>
              <span className="line-clamp-1">{report.location_text}</span>
            </div>
          )}
        </div>

        {/* Optional hover overlay for interactivity */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent opacity-0 group-hover:opacity-30 transition-opacity"></div>
      </div>
    </Link>
  );
}
