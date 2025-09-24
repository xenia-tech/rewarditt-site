import Section from '../components/Section'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import CTA from '../components/CTA'
import phoneMockup from '../assets/phonemockup.png'
import appStore from '../assets/appstore.png'
import playStore from '../assets/playstore.png'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-ink min-h-screen flex items-center relative overflow-hidden">
        <div className="container-max relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-fade-in-up">
                {/* <span className="inline-block bg-brand/20 text-brand px-4 py-2 rounded-full text-sm font-bold mb-8 border border-brand/30">
                  Tailwind connected ✅
                </span> */}
                <h1 className="h1 mb-6 animate-fade-in-up animation-delay-200 overflow-visible">
                  <span className="text-ink">Rewards</span><br />
                  <span className="gradient-text inline-block">made simple</span>
                </h1>
                <p className="lead text-gray-600 mb-10 max-w-lg animate-fade-in-up animation-delay-400">
                  Rewarditt connects convenience retailers with exclusive offers from leading food & drink brands. Simple to browse. Easy to redeem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
                  <Button variant="primary" href="mailto:hello@rewarditt.app">
                    Get Started
                  </Button>
                  <Button variant="ghost" className="!text-black" href="mailto:hello@rewarditt.app">
                    Learn More
                  </Button>
                </div>
                <div className="mt-8 animate-fade-in-up animation-delay-800">
                  <div className="flex gap-4 items-center">
                    <img 
                      src={appStore} 
                      alt="Download on the App Store" 
                      className="h-14 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                    <img 
                      src={playStore} 
                      alt="Get it on Google Play" 
                      className="h-34 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in-right animation-delay-800">
                <div className="relative z-10 max-w-xs mx-auto hover:scale-105 transition-transform duration-300">
                  <img 
                    src={phoneMockup} 
                    alt="Rewarditt App Mockup" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-brand/5 to-brand/10"></div>
      </Section>

      {/* How it Works */}
      <Section className="bg-gray-light animate-fade-in-up">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-6">How it works</h2>
              <p className="lead mb-12">
                Simple steps to start earning with brand partnerships. No points, no cashback — just direct deals.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <span className="text-black font-bold text-lg">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">Install</h3>
                    <p className="text-gray-600">Download the app from the App or Play Store</p>
                  </div>
                </div>
                
                <div className="flex gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <span className="text-black font-bold text-lg">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">Create your account</h3>
                    <p className="text-gray-600">Quick account setup process takes seconds</p>
                  </div>
                </div>
                
                <div className="flex gap-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                      <span className="text-black font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">Enjoy your Deals</h3>
                    <p className="text-gray-600">Start redeeming vouchers for deals on new and existing products</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative hover:scale-105 transition-transform duration-300">
              <div className="relative z-10 max-w-xs mx-auto">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-1 shadow-2xl">
                  <div className="bg-black rounded-3xl p-6">
                    <div className="bg-brand rounded-2xl p-4 mb-6 relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="text-black font-bold text-lg mb-1">$2,750.42</div>
                        <div className="text-black/70 text-xs">Available Balance</div>
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <button className="bg-gray-800 rounded-xl p-3 text-left">
                        <div className="w-8 h-8 bg-brand rounded-lg mb-2"></div>
                        <div className="text-white text-sm font-medium">Send</div>
                      </button>
                      <button className="bg-gray-800 rounded-xl p-3 text-left">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg mb-2"></div>
                        <div className="text-white text-sm font-medium">Request</div>
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2">
                        <div className="w-8 h-8 bg-brand rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-white text-sm">Sarah Johnson</div>
                          <div className="text-gray-400 text-xs">+44 7700 900123</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2">
                        <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-white text-sm">Mike Chen</div>
                          <div className="text-gray-400 text-xs">+44 7700 900456</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Finance Guidance */}
      <Section className="bg-white animate-fade-in-up">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">Great Rewards<br />Top Brands</h2>
            <p className="lead max-w-2xl mx-auto">
              Get personalized offers from your customers favourite brands
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              title="Smart Analytics"
              description="Track your spending patterns and get insights into your financial habits with detailed analytics"
            />
            <FeatureCard
              title="Budget Planning"
              description="Set and manage budgets with intelligent recommendations based on your spending history"
            />
            <FeatureCard
              title="Goal Tracking"
              description="Set financial goals and track your progress with personalized milestones and achievements"
            />
          </div>
        </div>
      </Section>

      {/* Plan for every milestone */}
      <Section className="bg-gray-light animate-fade-in-up">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="h2 mb-6">Exclusive deals for<br />every shop.</h2>
              <p className="lead mb-8">
                From energy drinks and snacks to pantry essentials, Rewarditt gives UK shop owners instant access to special digital coupons from the nation's favourite food and drink brands. Save on every order and keep your shelves stocked for less.
              </p>
              <Button variant="primary" href="mailto:hello@rewarditt.app">
                Start Saving
              </Button>
            </div>
            
            <div className="relative hover:scale-105 transition-transform duration-300">
              <div className="relative z-10 max-w-xs mx-auto">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-2xl border border-gray-800">
                  <div className="text-center mb-6">
                    <div className="text-white font-bold text-2xl mb-1">£50</div>
                    <div className="text-gray-400 text-sm">saved this month</div>
                  </div>
                  
                  <div className="bg-brand rounded-2xl p-4 mb-4">
                    <div className="text-black font-bold text-lg mb-1">20% Off</div>
                    <div className="text-black/70 text-sm">Red Bull Energy Drinks</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Expires</span>
                      <span className="text-white font-medium">30 Sept</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Status</span>
                      <span className="text-brand font-medium">Available</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Redeemed</span>
                      <span className="text-white font-medium">12 times</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expert Guidance */}
      <Section className="bg-white animate-fade-in-up">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <div className="relative z-10 max-w-xs mx-auto">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-2xl border border-gray-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">RB</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">Red Bull</div>
                      <div className="text-gray-400 text-xs">Limited time offer</div>
                    </div>
                  </div>
                  
                  <div className="bg-brand rounded-2xl p-4 mb-4">
                    <div className="text-black font-bold text-lg mb-1">£80 off</div>
                    <div className="text-black/70 text-xs">Red Bull Energy Drinks</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 rounded-xl p-3">
                      <div className="text-white text-sm font-medium mb-1">Redeem Today</div>
                      <div className="text-gray-400 text-xs">Tap to claim this exclusive offer</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-3">
                      <div className="text-white text-sm font-medium mb-1">Valid Until</div>
                      <div className="text-gray-400 text-xs">30 September 2024</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            </div>
            
            <div>
              <h2 className="h2 mb-6">Simple, instant rewards—<br />no fuss.</h2>
              <p className="lead mb-8">
                Just tap Redeem in the app to claim an offer and complete your order on the brand's site. No points to collect, no hidden fees—just straightforward savings from trusted names like Red Bull, Kettle Chips and more.
              </p>
              <Button variant="primary" href="mailto:hello@rewarditt.app">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="bg-gray-light animate-fade-in-up">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4">What Shop Owners Say</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-card border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-brand rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-2xl">£</span>
              </div>
              <blockquote className="text-2xl font-medium text-ink mb-6 leading-relaxed">
                "Rewarditt makes it so easy to stock up on deals from top brands. In a couple of taps I can claim coupons and order what I need—no points or hassle, just instant savings."
              </blockquote>
              <cite className="text-gray-600 font-medium">
                — Sarah Clarke, Convenience Store Owner, Manchester
              </cite>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="hero-gradient text-white animate-fade-in-up">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2 mb-6">
              <span className="text-white">Make</span><br />
              <span className="gradient-text">Smart Savings.</span>
            </h2>
            <p className="lead text-gray-300 mb-10 max-w-2xl mx-auto">
              Join the growing community of UK shop owners already claiming exclusive digital coupons from top food and drink brands. Start saving on your next order today.
            </p>
            <div className="flex justify-center">
              <Button variant="primary" href="mailto:hello@rewarditt.app">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
