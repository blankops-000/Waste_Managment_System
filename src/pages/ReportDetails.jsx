import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabase';

export default function ReportDetails() {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      const { data } = await supabase.from('reports').select('*').eq('id', id).single();
      setReport(data);
    };
    fetchReport();
  }, [id]);

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
        <p className="text-gray-600 text-lg animate-pulse">Loading report...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/reports"
          className="inline-block mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-lg text-emerald-600 font-semibold transition-all hover:-translate-y-0.5"
        >
          ← Back to Reports
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {report.image_url && (
            <img
              src={report.image_url}
              alt={report.title}
              className="w-full h-80 object-cover"
            />
          )}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{report.title}</h1>
            <p className="text-gray-700 mb-4">{report.description}</p>

            {report.category && (
              <p className="inline-block px-3 py-1 mb-2 bg-emerald-100 text-emerald-800 rounded-full font-semibold text-sm">
                Category: {report.category}
              </p>
            )}

            {report.status && (
              <p className="inline-block px-3 py-1 mb-2 ml-2 bg-gray-100 text-gray-800 rounded-full font-semibold text-sm">
                Status: {report.status.replace('_', ' ').toUpperCase()}
              </p>
            )}

            {report.location_text && (
              <p className="text-gray-500 mt-2 text-sm">📍 {report.location_text}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
