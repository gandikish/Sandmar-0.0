
import * as React from 'react'
import Login from './pages/Login.tsx'
import { Principal } from './pages/PrincipalPage.tsx'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

export const App = () => (
  
  <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </Router>
)
