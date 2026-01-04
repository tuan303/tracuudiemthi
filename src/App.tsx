
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminImport from './pages/AdminImport';
import PublicHome from './pages/PublicHome';
import PublicResult from './pages/PublicResult';
import { UserRole } from './types';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.ADMIN);

  useEffect(() => {
    const handleContextSwitch = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'q') {
        setRole(prev => prev === UserRole.ADMIN ? UserRole.STUDENT : UserRole.ADMIN);
      }
    };
    window.addEventListener('keydown', handleContextSwitch);
    return () => window.removeEventListener('keydown', handleContextSwitch);
  }, []);

  return (
    <HashRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/import" element={<AdminImport />} />
        
        {/* Public Routes */}
        <Route path="/" element={<PublicHome />} />
        <Route path="/result/:sbd" element={<PublicResult />} />
        <Route path="/result" element={<PublicResult />} />
        
        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
