import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n.ts'
import App from './App.tsx'
import LoadingSpinner from './component/LoadingSpinner/LoadingSpinner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Suspense fallback={<LoadingSpinner />}>
    <App />
    </Suspense>
  </StrictMode>,
)
