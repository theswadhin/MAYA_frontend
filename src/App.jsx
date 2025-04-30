import { useState } from 'react'
import Header from './header.jsx'
import Home from './Home.jsx'
import Footer from './footer.jsx';
import { Component } from './components/ContentGenerationFlow.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

return (
  <div className="min-h-screen flex flex-col">
    <Header />

    <main className="flex-grow">
    <div className="max-w-7xl mx-auto px-4">
    {/* Page content */}
    <Home />
    
    </div>
</main>
    <Component/>
    <Footer />
  </div>
  
)
}

export default App
