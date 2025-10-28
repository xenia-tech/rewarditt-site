import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Terms from './routes/Terms'
import Privacy from './routes/Privacy'
import GetStarted from './routes/GetStarted'
import ThankYou from './routes/ThankYou'

function ScrollToTop() {
  const location = useLocation()
  // When path changes, scroll to the very top
  // HashRouter provides pathname like '/get-started'
  // Avoid interfering with in-page anchors (if any) by only reacting to pathname
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])
  return null
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
