import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import './App.css'

const About = lazy(() => import('./components/About'))
const Home = lazy(() => import('./components/Home'))
const Contacts = lazy(() => import('./components/Contacts'))

function App() {
  return (
    <Router>
      <header className='header'>
        <div className='container'>
            <nav className='menu'>
              <ul className='menu-list'>
                <li className='menu-list-item'><Link to="/">Home</Link></li>
                <li className='menu-list-item'><Link to="/about">About</Link></li>
                <li className='menu-list-item'><Link to="/contacts">Contact</Link></li>
              </ul>
            </nav>
        </div>
      </header>
      
      <div className='container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </div>
      
    </Router>
  );
}

export default App
