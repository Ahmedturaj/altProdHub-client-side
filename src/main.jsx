import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main/Main';
import AuthProvider from './Provider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Queries from './Pages/Queries/Queries';
import RecommendationsForMe from './Pages/RecommendationsForMe/RecommendationsForMe';
import MyQueries from './Pages/MyQueries/MyQueries';
import MyRecommendations from './Pages/MyRecommendations/MyRecommendations';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allQueries',
        element: <Queries></Queries>
      },
      {
        path: '/reCommendForMe',
        element: <RecommendationsForMe></RecommendationsForMe>
      },
      {
        path: '/myQueries',
        element: <MyQueries></MyQueries>
      },
      {
        path: '/myRecommend',
        element: <MyRecommendations></MyRecommendations>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
