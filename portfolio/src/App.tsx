import React from 'react';
import { ActiveSectionProvider } from './context/activeSection'
import { MainRouter } from './main/routes/MainRouter'

function App() {
  return (
    <ActiveSectionProvider>
          <MainRouter />
    </ActiveSectionProvider>
  )
}

export default App

