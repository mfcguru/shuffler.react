import React from 'react'
import { useRoutes } from 'hookrouter'
import './App.css'

import NotFound from './features/notfound'
import Navbar from './shared/navbar'
import { routes } from './core/routes'

function App() {
  const routesResult = useRoutes(routes)

  return (
    <div>
      <Navbar />
      <div className="container py-5">{routesResult || <NotFound />}</div>
    </div>
  )
}

export default App
