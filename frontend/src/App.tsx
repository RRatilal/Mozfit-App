import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './global.css';

import { AuthProvider } from './context/auth';
import { AdminProvider } from './context/admin';
import MainRoutes from './routes/routes';

function App() {

  return (
    <AuthProvider>
      <AdminProvider>
        <Router>
          <MainRoutes />
        </Router>
      </AdminProvider>
    </AuthProvider>
  );
}

export default App;
