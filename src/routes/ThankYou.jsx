import Button from '../components/Button'

export default function ThankYou() {
  return (
    <div className="section bg-white">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="h1 mb-4">Thank you!</h1>
          <p className="lead mb-8">We've received your details and will be in touch shortly.</p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" to="/">Back to Home</Button>
            <Button variant="ghost" className="!text-black" to="/get-started">Submit another response</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
