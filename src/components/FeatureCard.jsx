export default function FeatureCard({ icon, title, description, className = "" }) {
  return (
    <div className={`group bg-white p-8 rounded-2xl shadow-card border border-gray-100 transition-transform transition-shadow duration-300 hover:-translate-y-1.5 hover:shadow-xl ${className}`}>
      <div className="w-14 h-14 bg-gradient-to-br from-brand to-brand-dark rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
        <div className="w-7 h-7 bg-black rounded-lg" />
      </div>
      <h3 className="text-xl font-bold text-ink mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
