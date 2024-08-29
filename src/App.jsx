import { useState } from 'react'
import Signup from './Pages/Signup'
import Thankyou from './Pages/Thankyou'
import Error from './Pages/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />
    },
    {
      path: "/Thankyou",
      element: <Thankyou />
    },
    {
      path: "*",
      element: <Error />
    },
  ])

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
