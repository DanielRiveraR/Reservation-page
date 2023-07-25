const Button = ({ type, link, text, icon, onClick, disabled, id} ) => { 
  return (
    <button 
    className="button" 
    id={id}
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