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
        element: <Queries></Queries>,
        loader: () => fetch('http://localhost:5000/queries')
      },
      {
        path: '/queryDetails/:id',
        element: <QueryDetail></QueryDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/queries/${params.id}`)
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
        path: '/addQuery',
        element: <AddQueries></AddQueries>
      },
      {
        path: '/myRecommend',
        element: <MyRecommendations></MyRecommendations>
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
