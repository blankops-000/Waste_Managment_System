export default function MapPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px 16px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Collection Points Map</h1>
            <p style={{ color: '#6b7280' }}>
              Find nearby waste collection points and disposal locations
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', padding: '60px 24px', borderRadius: '16px', textAlign: 'center', border: '2px dashed #cbd5e1' }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>🗺️</div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Interactive Map</h3>
            <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '24px' }}>
              Map integration coming soon...
            </p>
            <p style={{ color: '#64748b', fontSize: '14px' }}>
              This will show waste collection points, reported issues, and disposal locations in your area
            </p>
          </div>

          <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#0369a1', marginBottom: '8px' }}>🏢 Collection Centers</h4>
              <p style={{ color: '#64748b', fontSize: '14px' }}>Find official waste collection facilities</p>
            </div>

            <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#16a34a', marginBottom: '8px' }}>♻️ Recycling Points</h4>
              <p style={{ color: '#64748b', fontSize: '14px' }}>Locate recycling drop-off locations</p>
            </div>

            <div style={{ backgroundColor: '#fef7cd', padding: '20px', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#ca8a04', marginBottom: '8px' }}>⚠️ Reported Issues</h4>
              <p style={{ color: '#64748b', fontSize: '14px' }}>View waste problems in your area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}