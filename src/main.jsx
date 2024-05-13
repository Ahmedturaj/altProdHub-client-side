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
import LogIn from './Pages/Authenticate/LogIn/LogIn';
import SignUp from './Pages/Authenticate/SignUp/SignUp';
import AddQueries from './Pages/MyQueries/AddQueries/AddQueries';
import QueryDetail from './Pages/Queries/QueryDetail';
import PrivateRoutes from './Components/PageBanner/PrivateRoute/PrivateRoute';
import Update from './Components/Update/Update';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allQueries',
        element: <Queries></Queries>,
        loader: () => fetch('http://localhost:5000/queries')
      },
      {
        path: '/queryDetails/:id',
        element: <PrivateRoutes><QueryDetail></QueryDetail></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`, { credentials: 'include' })
      },
      {
        path: '/reCommendForMe',
        element: <PrivateRoutes><RecommendationsForMe></RecommendationsForMe></PrivateRoutes>
      },
      {
        path: '/myQueries',
        element: <PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>
      },
      {
        path: '/addQuery',
        element: <PrivateRoutes><AddQueries></AddQueries></PrivateRoutes>
      },
      {
        path: '/myRecommend',
        element: <PrivateRoutes><MyRecommendations></MyRecommendations></PrivateRoutes>
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`, { credentials: 'include' })
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>
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
