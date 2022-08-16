import React from 'react'
import Home from './pages/home/Home'
import List from './pages/list/List'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Single from './pages/single/Single'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users" >
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App