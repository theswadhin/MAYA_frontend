import { useState } from 'react'
import Header from './header.jsx'
import Home from './Home.jsx'
import Footer from './footer.jsx';
import ContentGenerationFlow from './ContentGenerationFlow.jsx';
import Login  from './login.jsx';
import Register from './register.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

return (
  <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ContentGenerationFlow" element={<ContentGenerationFlow />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
);
}

export default App