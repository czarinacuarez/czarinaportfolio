import React from 'react';

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';

import App from './App.tsx'
import LoadingSpinner from './component/LoadingSpinner/LoadingSpinner.tsx'
import { preloadImages } from './utils/preload.tsx';
import { designAssets } from './assets/designs/index.ts';

preloadImages(designAssets).catch(console.error);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <App />
    </Suspense>
  </StrictMode>,
)
