import React from 'react';
import { Outlet } from 'react-router-dom'
import NavigationBar from '../../component/NavigationBar/NavigationBar'
import ReactLenis from 'lenis/react';

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <ReactLenis root
        options={{ lerp: 0.09 }}>
        <header>
          <NavigationBar />
        </header>
        <main>
          <Outlet />
        </main>
      </ReactLenis>

    </div>
  )
}

export default MainLayout