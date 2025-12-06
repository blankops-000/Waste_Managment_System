export default function Reports() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px 16px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Analytics & Reports</h1>
            <p style={{ color: '#6b7280' }}>
              View waste management statistics and track cleanup progress
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: '#f0f9ff', padding: '24px', borderRadius: '16px', border: '1px solid #e0f2fe' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0369a1', marginBottom: '8px' }}>Total Reports</h3>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#0c4a6e' }}>156</p>
              <p style={{ color: '#64748b', fontSize: '14px' }}>+12 this week</p>
            </div>

            <div style={{ backgroundColor: '#f0fdf4', padding: '24px', borderRadius: '16px', border: '1px solid #dcfce7' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#16a34a', marginBottom: '8px' }}>Resolved Issues</h3>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#15803d' }}>89</p>
              <p style={{ color: '#64748b', fontSize: '14px' }}>57% resolution rate</p>
            </div>

            <div style={{ backgroundColor: '#fefce8', padding: '24px', borderRadius: '16px', border: '1px solid #fef3c7' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ca8a04', marginBottom: '8px' }}>Pending Reports</h3>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#a16207' }}>67</p>
              <p style={{ color: '#64748b', fontSize: '14px' }}>Awaiting action</p>
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>Recent Reports</h2>
            <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
              <p style={{ color: '#64748b', fontSize: '16px' }}>📊 Detailed reports and analytics coming soon...</p>
              <p style={{ color: '#64748b', fontSize: '14px', marginTop: '8px' }}>Connect to database to view real-time data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}