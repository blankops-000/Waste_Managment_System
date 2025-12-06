import { useState } from 'react';
import { supabase } from '../supabase';

export default function Contribute() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await supabase.from('contributions').insert([{ name, amount, message }]);
    setLoading(false);
    alert('Thank you for your contribution!');
    setName('');
    setAmount('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block animate-pulse">💚</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your contribution helps us maintain and improve our waste management initiatives. Every donation makes a difference!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contribution Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Contribution</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                <input
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Amount ($) *</label>
                <input
                  required
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="50.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  rows="4"
                  placeholder="Share why you're contributing..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-2xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Contribute Now ❤️'}
              </button>
            </form>
          </div>

          {/* Info Panels */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl shadow-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Impact of Your Donation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Fund cleanup operations in local communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Support waste management infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Educate communities about proper waste disposal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Maintain and improve this platform</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Quick Amounts</h3>
              <div className="grid grid-cols-3 gap-3">
                {['10', '25', '50', '100', '250', '500'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setAmount(amt)}
                    className="py-3 px-4 bg-emerald-50 text-emerald-700 rounded-2xl font-semibold hover:bg-emerald-100 transition-colors"
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
