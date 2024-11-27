import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './screens/auth/LoginPage';
import HomePage from './screens/home/HomePage';
import AuthProvider from './provider/AuthProvider';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <AuthProvider><LoginPage /></AuthProvider> } />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App