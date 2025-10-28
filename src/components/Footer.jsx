import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-ink text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-black text-white mb-4">Rewarditt</div>
            <p className="text-gray-400 max-w-md mb-6">
              Great Rewards, Top Brands
            </p>
            {/* Social icons removed */}
          </div>
          
          {/* <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li> */}
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400">
              © {currentYear} Strictly Sales and Marketing LTD. All rights reserved.
            </div>
            <a
              href="https://xenia.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 mt-4 md:mt-0 block"
            >
              Site Built by Xenia Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
