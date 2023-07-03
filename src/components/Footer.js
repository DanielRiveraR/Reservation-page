import Logo from '../icons_assets/Logo.svg';

const Footer = () => { 
  return (
    <>
      <footer className='footer max-width-container'>
        <img src={Logo} alt='Footer-img' />
        <div>
          <p>&copy; Dani R. 2023</p>
        </div>
      </footer>
    </>
  )
 }

 export default Footer;