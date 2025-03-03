import React from 'react';

import { Outlet } from 'react-router-dom'
import NavigationBar from '../../component/NavigationBar/NavigationBar'

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout