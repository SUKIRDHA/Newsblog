import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DarkModeToggle from "./Components/DarkModeToggle";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import ArticleDetail from "./Pages/ArticleDetail";
function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App
