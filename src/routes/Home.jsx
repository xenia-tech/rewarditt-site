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
                  <Button variant="primary" to="/get-started">
                    Get Started
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
        {/* Enhanced animated background layers (non-intrusive) */}
        <div className="pointer-events-none absolute inset-0">
          {/* subtle animated gradient wash */}
          <div
            className="absolute inset-0 opacity-30 animate-gradient-shift"
            style={{
              animationDuration: '6s',
              background: `radial-gradient(600px circle at 20% 20%, rgba(16,185,129,0.15), transparent 60%),
                           radial-gradient(520px circle at 80% 25%, rgba(59,130,246,0.15), transparent 60%),
                           radial-gradient(700px circle at 50% 85%, rgba(139,92,246,0.12), transparent 60%)`
            }}
          />
          {/* floating blurred orbs */}
          <div className="absolute -top-24 -right-32 w-[40rem] h-[40rem] bg-brand/20 rounded-full blur-3xl animate-float-slow" style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-32 -left-24 w-[34rem] h-[34rem] bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" style={{ animationDuration: '7s' }} />
          {/* extra subtle orb */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '6s' }} />
        </div>
        {/* base brand tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/15 via-brand/5 to-brand/10"></div>
      </Section>

      {/* How it Works */}
      <Section className="bg-gray-light animate-fade-in-up">
        <div className="container-max">
          <div className="grid lg:grid-cols-1 gap-16 items-start">
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
              title="Exclusive Brand Offers"
              description="Access digital coupons from leading food & drink brands to stock your shelves for less."
            />
            <FeatureCard
              title="Instant Redemption"
              description="Claim an offer in-app and complete your order on the brand’s site—no points, no hassle."
            />
            <FeatureCard
              title="Track Savings"
              description="See how much you save each month with a clear view of claimed and redeemed offers."
            />
          </div>
        </div>
      </Section>

      {/* Two-up text section: Exclusive deals + Simple rewards */}
      <Section className="bg-white animate-fade-in-up">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="h2 mb-6">Exclusive deals for<br />every shop.</h2>
              <p className="lead mb-8">
                From energy drinks and snacks to pantry essentials, Rewarditt gives UK shop owners instant access to special digital coupons from the nation's favourite food and drink brands. Save on every order and keep your shelves stocked for less.
              </p>
              <Button variant="primary" to="/get-started">
                Start Saving
              </Button>
            </div>
            <div>
              <h2 className="h2 mb-6">Simple, instant rewards—<br />no fuss.</h2>
              <p className="lead mb-8">
                Just tap Redeem in the app to claim an offer and complete your order on the brand's site. No points to collect, no hidden fees—just straightforward savings from trusted names like Red Bull, Kettle Chips and more.
              </p>
              <Button variant="primary" to="/get-started">
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
