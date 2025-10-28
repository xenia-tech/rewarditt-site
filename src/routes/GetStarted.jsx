import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function GetStarted() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    shopName: '',
    shopAddress: '',
    honey: '',
    consent: false,
  })
  const [status, setStatus] = useState({ error: '' })

  // Simple math captcha
  const challenge = useMemo(() => {
    const a = Math.floor(Math.random() * 9) + 1
    const b = Math.floor(Math.random() * 9) + 1
    return { a, b, answer: a + b }
  }, [])

  function update(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function onSubmit(e) {
    // Only prevent default on validation failure; otherwise allow the browser to submit the form
    setStatus({ error: '' })

    // Basic anti-spam checks
    if (form.honey) {
      e.preventDefault()
      setStatus({ error: 'Spam detected.' })
      return
    }
    const userAnswer = Number((e.target.elements['captcha']?.value || '').trim())
    if (userAnswer !== challenge.answer) {
      e.preventDefault()
      setStatus({ error: 'Captcha answer is incorrect.' })
      return
    }
    // If we reach here, set redirect to our Thank You route and allow normal submit
    const redirectUrl = `${window.location.origin}${window.location.pathname}#/thank-you`
    const redirectField = e.target.elements['redirect']
    if (redirectField) redirectField.value = redirectUrl
  }

  return (
    <div className="section bg-white">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
            className="inline-flex items-center text-ink hover:text-brand font-medium mb-6"
          >
            <span className="mr-2" aria-hidden>←</span>
            Back
          </button>
          <h1 className="h1 mb-6">Get Started</h1>
          <p className="lead mb-8">Fill in your details and we’ll be in touch.</p>

          <form onSubmit={onSubmit} action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            {/* Honeypot */}
            <input type="text" name="honey" value={form.honey} onChange={update} className="hidden" tabIndex="-1" autoComplete="off" />

            <div>
              <label className="block text-sm font-bold text-ink mb-2">Name</label>
              <input name="name" value={form.name} onChange={update} required className="w-full border border-gray-300 rounded-lg p-3" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={update} required className="w-full border border-gray-300 rounded-lg p-3" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-2">Phone</label>
              <input name="phone" value={form.phone} onChange={update} className="w-full border border-gray-300 rounded-lg p-3" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-2">Shop Name</label>
              <input name="shopName" value={form.shopName} onChange={update} className="w-full border border-gray-300 rounded-lg p-3" />
            </div>
            <div>
              <label className="block text-sm font-bold text-ink mb-2">Shop Address</label>
              <textarea name="shopAddress" value={form.shopAddress} onChange={update} rows={3} className="w-full border border-gray-300 rounded-lg p-3" />
            </div>

            {/* Web3Forms required access key */}
            <input type="hidden" name="access_key" value="743de8f4-4b1e-414f-b36b-68108e9e039a" />
            {/* Optional subject shown in notifications */}
            <input type="hidden" name="subject" value="New Rewarditt signup" />
            {/* Redirect to Thank You page after submission */}
            <input type="hidden" name="redirect" value="" />

            {/* Simple captcha */}
            <div>
              <label className="block text-sm font-bold text-ink mb-2">Anti-spam check</label>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">What is {challenge.a} + {challenge.b}?</span>
                <input name="captcha" required className="w-24 border border-gray-300 rounded-lg p-2" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input id="consent" type="checkbox" name="consent" checked={form.consent} onChange={update} required />
              <label htmlFor="consent" className="text-sm text-gray-600">I agree to be contacted about Rewarditt.</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            {status.error && (
              <div className="text-sm text-red-600">{status.error}</div>
            )}


          </form>
        </div>
      </div>
    </div>
  )
}
