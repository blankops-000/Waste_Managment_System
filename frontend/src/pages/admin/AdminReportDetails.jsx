import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';

export default function AdminReportDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [status, setStatus] = useState('pending');
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchReport = async () => {
      const { data } = await supabase.from('reports').select('*').eq('id', id).single();
      setReport(data);
      setStatus(data?.status || 'pending');
    };
    fetchReport();
  }, [id]);

  const updateStatus = async () => {
    if (!report) return;
    setLoading(true);
    const { error } = await supabase.from('reports').update({ status }).eq('id', id);
    setLoading(false);
    if (error) alert(error.message);
    else alert('Status updated!');
  };

  const deleteReport = async () => {
    if (!report) return;
    const confirmed = window.confirm('Are you sure you want to delete this report? This action cannot be undone.');
    if (!confirmed) return;

    setDeleting(true);
    const { error } = await supabase.from('reports').delete().eq('id', id);
    setDeleting(false);
    if (error) alert(error.message);
    else {
      alert('Report deleted!');
      navigate('/admin/dashboard');
    }
  };

  if (!report)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="inline-block w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 p-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{report.title}</h1>

        {report.image_url && (
          <img
            src={report.image_url}
            alt={report.title}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
        )}

        <p className="text-gray-700 mb-6">{report.description || 'No description provided.'}</p>

        {report.location_text && (
          <p className="text-gray-500 mb-4">📍 Location: {report.location_text}</p>
        )}

        <div className="flex items-center gap-4 mb-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:border-emerald-500 transition-colors"
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <button
            onClick={updateStatus}
            disabled={loading}
            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Status'}
          </button>
        </div>

        <button
          onClick={deleteReport}
          disabled={deleting}
          className="px-4 py-2 bg-red-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50"
        >
          {deleting ? 'Deleting...' : 'Delete Report'}
        </button>
      </div>
    </div>
  );
}
