import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './global.css';

import { AuthProvider } from './context/auth';
import MainRoutes from './routes/routes';

function App() {

  return (
    <AuthProvider>
      <Router>
        <MainRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
