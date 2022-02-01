import React from 'react';
import CardItem from './CardItem.js';
import './Cards.css';

function Cards() {
  return (
      <div className='cards'>
          <h1>Choose where to start you reading journey!</h1>
          <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__items'>
                    <CardItem
                    src = 'image/read-book.jpg'
                    text = "Explore the depths of these amazing adventure novels" 
                    label = 'Adventure'
                    path = '/products'/>

                    <CardItem
                    src = 'image/books2.jpeg'
                    text = "So you like solving mysteries? Try one of these absorbing mystery novels" 
                    label = 'Mystery'
                    path = '/products'/>
                  </ul>

                  <ul className='cards__items'>
                    <CardItem
                    src = 'image/books4.jpeg'
                    text = "Subsribe to our book club and get access to many free ebooks" 
                    label = 'Book Club'
                    path = '/services'/>

                    <CardItem
                    src = 'image/books5.jpg'
                    text = "Sign up to The Book Zone and enjoy the perks of being a member" 
                    label = 'Sign Up'
                    path = '/services'/>

                    
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Cards;
