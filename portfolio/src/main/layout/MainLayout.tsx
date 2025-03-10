import { Outlet } from 'react-router-dom'
import NavigationBar from '../../component/NavigationBar/NavigationBar'
import { ReactLenis } from 'lenis/react';

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <NavigationBar />
      </header>
      <ReactLenis root
        options={{ lerp: 0.05 }}>
        <main>
          <Outlet />
        </main>
      </ReactLenis>
    </div >
  )
}

export default MainLayout