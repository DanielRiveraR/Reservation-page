import Card from '../components/Card'
import bruchetta from '../icons_assets/bruchetta.svg';
import greek from '../icons_assets/greek salad.jpg';
import lemon from '../icons_assets/lemon dessert.jpg'
import Button from './Button';

export default function Specials () {
  return (
    <>
      <div className='main-specials max-width-container'>
        <h1>This weeks specials!</h1>
        <Button text={'Online Menu'} />
      </div><section className='main max-width-container'>
          <Card
            src={greek}
            alt='Greek Salad'
            name={'Greek Salad'}
            price={'$12.99'}
            details={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'} />
          <Card
            src={bruchetta}
            alt='Bruschetta'
            name={'Bruschetta'}
            price={'$12.99'}
            details={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '} />
          <Card
            src={lemon}
            alt="Lemon Dessert"
            name={'Lemon Dessert'}
            price={'$10.99'}
            details={'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'} />
        </section>
      </>
  )
}