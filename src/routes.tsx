import React, { FC } from 'react'
import { Navigate, useRoutes } from 'react-router'
import Page404 from './pages/404/Page404'
import LandingPage from './pages/LandingPage/LandingPage'

const Routes: FC = () => {
  return useRoutes([
    { path: '/', element: <LandingPage /> },
    { path: '/404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" />}
  ])
}

export default Routes