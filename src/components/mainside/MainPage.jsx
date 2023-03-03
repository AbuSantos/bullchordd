import React from 'react'
import Post from './Maincomponents/posts/Post'
import User from './Maincomponents/users/User'
import './style.css'
import { Switch, Routes, Route } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className="main-page">
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </div>
  )
}

export default MainPage
