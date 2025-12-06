import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateReport() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('plastic');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Report submitted successfully!');
      setLoading(false);
      navigate('/reports');
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f9fafb, #ecfdf5)', padding: '48px 16px' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '40px' }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Report Waste Issue</h1>
            <p style={{ color: '#6b7280' }}>
              Help us keep the environment clean by reporting waste issues
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Title *</label>
              <input
                required
                placeholder="e.g., Illegal dumping on Main Street"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '100%', padding: '12px 20px', border: '2px solid #e5e7eb', borderRadius: '16px', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ width: '100%', padding: '12px 20px', border: '2px solid #e5e7eb', borderRadius: '16px', outline: 'none' }}
              >
                <option value="plastic">🧴 Plastic</option>
                <option value="organic">🌿 Organic</option>
                <option value="electronic">💻 Electronic</option>
                <option value="hazardous">⚠️ Hazardous</option>
                <option value="general">🗑️ General</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Description *</label>
              <textarea
                required
                rows="4"
                placeholder="Describe the waste issue in detail..."
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                style={{ width: '100%', padding: '12px 20px', border: '2px solid #e5e7eb', borderRadius: '16px', outline: 'none', resize: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Location</label>
              <input
                placeholder="e.g., 123 Main St, City"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ width: '100%', padding: '12px 20px', border: '2px solid #e5e7eb', borderRadius: '16px', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Photo</label>
              <div style={{ border: '2px dashed #d1d5db', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                {preview ? (
                  <div>
                    <img src={preview} alt="Preview" style={{ maxHeight: '256px', margin: '0 auto', borderRadius: '16px' }} />
                    <button
                      type="button"
                      onClick={() => { setImage(null); setPreview(null); }}
                      style={{ marginTop: '16px', padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', borderRadius: '16px', border: 'none', cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <span style={{ fontSize: '48px', marginBottom: '8px', display: 'block' }}>📷</span>
                    <label style={{ cursor: 'pointer' }}>
                      <span style={{ color: '#10b981', fontWeight: '600' }}>
                        Upload a photo
                      </span>
                      <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                    </label>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(to right, #10b981, #059669)',
                color: 'white',
                borderRadius: '16px',
                fontWeight: '600',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.5 : 1
              }}
            >
              {loading ? 'Submitting...' : 'Submit Report →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}