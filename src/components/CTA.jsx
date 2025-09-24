import Button from './Button'

export default function CTA({ title, description, buttons, className = "" }) {
  return (
    <div className={`bg-ink text-white py-16 ${className}`}>
      <div className="container-max text-center">
        <h2 className="h2 text-white mb-4">{title}</h2>
        {description && (
          <p className="lead text-gray-300 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons?.map((button, index) => (
            <Button
              key={index}
              variant={button.variant || "primary"}
              href={button.href}
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
