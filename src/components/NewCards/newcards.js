import React from 'react';
import './NewCard.css';
import CardItem from '../CardItem';

function NewCards() {
  return (
    <div className='ncards'>
      <h1>Check out New Things!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/m1.jpg'
              text='This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.'
              label='Mythology'
              title = 'LORD RAMA'
              path='/products'
            />
            <CardItem
              src='images/t1.png'
              title = 'ISKON TEMPLE'
              text='This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.'
              label='Temple'
              path='/sign-up'
            />
            <CardItem
              src='images/f1.jpg'
              title='DUSSHERA'
              text='This temple is constructed and maintained by ISKCON.The "darshan mandap"  at Hare Krishna Land is tastefully decorated utilizing several forms of traditional Indian art.'
              label='Festival'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewCards;
