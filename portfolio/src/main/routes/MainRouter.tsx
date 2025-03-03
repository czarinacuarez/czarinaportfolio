import React from 'react';

import { Route, BrowserRouter, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import MainPage from '../pages/MainPage'

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)