// src/App.jsx
import React from 'react';
import { useAuth } from 'react-oidc-context';

function App() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case 'signinSilent':
      return <div>Signing you in...</div>;
    case 'signoutRedirect':
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div className="flex flex-col items-center ">
        <div className="mb-4">Hello {auth.user?.profile.sub}</div>
        <button className="btn" onClick={() => void auth.removeUser()}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <button className="btn" onClick={() => void auth.signinRedirect()}>
      Log in
    </button>
  );
}

export default App;
