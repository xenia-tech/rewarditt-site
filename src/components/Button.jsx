import { Link } from 'react-router-dom'

export default function Button({ 
  children, 
  variant = "primary", 
  href, 
  to,
  onClick, 
  className = "",
  ...props 
}) {
  const baseClasses = "btn transition-transform duration-300 hover:scale-[1.03] active:scale-95"
  const variantClasses = {
    primary: "btn-primary",
    ghost: "btn-ghost"
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

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
