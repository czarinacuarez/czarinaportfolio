import { Outlet } from 'react-router-dom'
import NavigationBar from '../../component/NavigationBar/NavigationBar'

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <header className="p-4 text-center">
        <NavigationBar/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout