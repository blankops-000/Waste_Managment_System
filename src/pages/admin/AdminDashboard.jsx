import { useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [reports, setReports] = useState([]);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: reportsData } = await supabase.from('reports').select('*').order('created_at', { ascending: false });
      setReports(reportsData || []);
      const { data: contribData } = await supabase.from('contributions').select('*').order('created_at', { ascending: false });
      setContributions(contribData || []);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        {/* Reports Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reports</h2>
          {reports.length === 0 ? (
            <p className="text-gray-600">No reports available.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((r) => (
                <Link
                  key={r.id}
                  to={`/admin/reports/${r.id}`}
                  className="block p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">{r.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{r.description || 'No description'}</p>
                  <p className="mt-2 text-xs text-gray-500">Status: {r.status || 'Pending'}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Contributions Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contributions</h2>
          {contributions.length === 0 ? (
            <p className="text-gray-600">No contributions yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contributions.map((c) => (
                <div
                  key={c.id}
                  className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <h3 className="font-bold text-lg text-gray-900">{c.name}</h3>
                  <p className="text-gray-600 mt-1">Amount: ${c.amount}</p>
                  {c.message && <p className="text-gray-500 mt-1 text-sm">"{c.message}"</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
