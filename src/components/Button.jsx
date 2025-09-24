export default function Button({ 
  children, 
  variant = "primary", 
  href, 
  onClick, 
  className = "",
  ...props 
}) {
  const baseClasses = "btn"
  const variantClasses = {
    primary: "btn-primary",
    ghost: "btn-ghost"
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
