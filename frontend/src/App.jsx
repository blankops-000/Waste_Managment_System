import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Reports from './pages/Reports.jsx';
import ReportDetails from './pages/ReportDetails.jsx';
import CreateReport from './pages/CreateReport.jsx';
import Contribute from './pages/Contribute.jsx';
import MapPage from './pages/Map.jsx';
import Login from './auth/Login.jsx';
import Signup from './auth/Signup.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminReportDetails from './pages/admin/AdminReportDetails.jsx';
import NotFound from './pages/NotFound.jsx'; // new 404 page

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/report/:id" element={<ReportDetails />} />
      <Route path="/create-report" element={<CreateReport />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/reports/:id" element={<AdminReportDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
