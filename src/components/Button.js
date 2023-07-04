const Button = ({ link, text, icon, onClick} ) => { 
  return (
    <button className="button" onClick={onClick} src={icon} href={link}>{text}</button>
  )
 }

export default Button;