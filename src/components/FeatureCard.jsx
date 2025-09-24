export default function FeatureCard({ icon, title, description, className = "" }) {
  return (
    <div className={`bg-white p-8 rounded-2xl shadow-card card-hover border border-gray-100 ${className}`}>
      <div className="w-14 h-14 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg">
        <div className="w-7 h-7 bg-black rounded-lg"></div>
      </div>
      <h3 className="text-xl font-bold text-ink mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
