import Button from './Button'
import restaurantImage from '../icons_assets/restauranfood.jpg';

function Header() {
  return (
    <header className="header max-width-container">
      <span className='section-background'></span>
        <div className='hero'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned <br/>Mediterranean restaurant,<br/>focused on traditional<br/>recipes served with a modern twist. </p>
          <Button text={'Reserve a Table'}/>
      </div>
      <img src={restaurantImage} alt='restaurant' className="header-image"></img>
    </header>
  );
}

export default Header;
