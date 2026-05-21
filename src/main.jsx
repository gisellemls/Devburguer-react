import { StrictMode } from 'react';


import { createRoot } from 'react-dom/client';
import { Login } from './containers/login/index.jsx';
import GlobalStyles from './styles/GlobalStyles.js';
import AppProviver from './hooks/index.jsx';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/index.jsx';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './Config/StripeConfig.js';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProviver>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />

          </BrowserRouter>
        </Elements>
        <GlobalStyles />
        <ToastContainer />
      </AppProviver>
    </ThemeProvider>
  </StrictMode>,
);
