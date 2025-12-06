import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        background: 'linear-gradient(to right, #3b82f6, #10b981)',
        color: 'white',
        padding: '32px',
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 'bold',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}>
        Waste Management System
      </header>
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '24px',
        padding: '40px'
      }}>
        <Link to="/create-report" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          width: '256px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb', marginBottom: '12px' }}>Report</h3>
          <p style={{ color: '#6b7280' }}>Report waste issues in your area with photos and location details.</p>
        </Link>

        <Link to="/map" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          width: '256px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb', marginBottom: '12px' }}>Collection Point</h3>
          <p style={{ color: '#6b7280' }}>Find nearby waste collection points and disposal locations.</p>
        </Link>

        <Link to="/reports" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          width: '256px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2563eb', marginBottom: '12px' }}>Analytics</h3>
          <p style={{ color: '#6b7280' }}>View reports, statistics and track cleanup progress in your area.</p>
        </Link>
      </div>
      
      <footer style={{
        textAlign: 'center',
        padding: '16px',
        color: '#6b7280',
        backgroundColor: '#f9fafb',
        borderTop: '1px solid #e5e7eb'
      }}>
        © 2024 Waste Management System - Making Our Planet Cleaner
      </footer>
    </div>
  );
}
