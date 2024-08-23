import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-so1wrrviq8zbv6uz.us.auth0.com"
    clientId="4yArQY7anZ9DID60ZzJC4Zj9UEHuQfcH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
