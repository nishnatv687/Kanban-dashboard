import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import DashBoard from '../pages/DashBoard'
import TaskPage from '../pages/TaskPage'
import AddTaskPage from '../pages/AddTaskPage'

const AppRoutes = () => {
  const router = createBrowserRouter([
        
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<DashBoard/>
            },
            {
                path:"tasks",
                element:<TaskPage/>
            },
            {
              path:"form",
              element:<AddTaskPage/>
            }
        ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes