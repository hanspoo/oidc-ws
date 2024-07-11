import { AuthProvider } from 'react-oidc-context';
import App from './app';

const oidcConfig = {
  authority: import.meta.env.AUTHORITY || 'http://localhost:8080',
  client_id: import.meta.env.CLIENT_ID || '275414623035917827@zitadel-project',
  redirect_uri:
    import.meta.env.REDIRECT_URI || 'http://localhost:4200/admin/callback',
};

export function MetaApp() {
  return (
    <AuthProvider {...oidcConfig}>
      <div
        data-theme="cyberpunk"
        className="flex h-screen flex-col items-center justify-center"
      >
        <App />
      </div>
    </AuthProvider>
  );
}
