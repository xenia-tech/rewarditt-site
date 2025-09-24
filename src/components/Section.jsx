export default function Section({ children, className = "", ...props }) {
  return (
    <section className={`section ${className}`} {...props}>
      {children}
    </section>
  )
}
