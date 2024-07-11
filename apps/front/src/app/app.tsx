// src/App.jsx
import React from 'react';
import { useAuth } from 'react-oidc-context';
import { Navbar } from './navbar';
import { Authenticaded } from './Authenticaded';
import { Unauthenticated } from './Unauthenticated';

export function App() {
  const auth = useAuth();
  return (
    <div>
      <Navbar />
      <div className="m-4">
        {auth.isAuthenticated ? <Authenticaded /> : <Unauthenticated />}
      </div>
    </div>
  );
}

export default App;
