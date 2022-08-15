import React from 'react'
import Home from './pages/home/Home'
import List from './pages/list/List'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="users" element={<List/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App