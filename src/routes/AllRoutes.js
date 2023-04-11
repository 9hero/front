import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login, Main } from '../pages'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  )
}
