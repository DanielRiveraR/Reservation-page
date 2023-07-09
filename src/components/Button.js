const Button = ({ type, link, text, icon, onClick, disabled} ) => { 
  return (
    <button 
    className="button" 
    type={type}
    onClick={onClick} 
    src={icon} 
    href={link}
    disabled={disabled}
    >
      {text}
    </button>
  )
 }

export default Button;