import { Suspense } from 'react'
import { MainRouter } from './main/routes/MainRouter'
import LoadingSpinner from './component/LoadingSpinner/LoadingSpinner'

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
    <MainRouter />
  </Suspense>
  )
}

export default App

