import { Route, BrowserRouter, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import MainPage from '../pages/MainPage'

export const MainRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}