import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white text-gray-900">
        <Routes>
          <Route path="/" element={<Navigate to="/audit" replace />} />
          <Route path="/audit" element={<LandingPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;