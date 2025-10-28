import { Link } from 'react-router-dom'
import Button from './Button'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
              <span className="text-black font-bold italic text-xl">R.</span>
            </div>
            <span className="text-2xl font-bold italic text-ink">
              Rewarditt
            </span>
          </Link>
          
          {/* <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-ink hover:text-brand font-medium transition-colors">
              Home
            </Link>
            <a href="#features" className="text-ink hover:text-brand font-medium transition-colors">
              Features
            </a>
            <a href="#about" className="text-ink hover:text-brand font-medium transition-colors">
              About
            </a>
          </nav> */}
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              href="mailto:hello@rewarditt.app"
              className="hidden sm:inline-flex text-ink border-gray-300 hover:bg-gray-50"
            >
              Sign In
            </Button>
            <Button 
              variant="primary" 
              to="/get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
