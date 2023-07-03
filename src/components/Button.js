const Button = ({ link, text, icon} ) => { 
  return (
    <button className="button" src={icon} href={link}>{text}</button>
  )
 }

export default Button;