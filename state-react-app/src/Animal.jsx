import React, { useState } from 'react';
import './Animal.css';
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import horse from './images/horse.svg';
import gator from './images/gator.svg';
import heart from './images/heart.svg';

const Animal = ({ type }) => {

    const imageMap = {
        bird,
        cat,
        cow,
        dog,
        horse,
        gator
    }

    const [clicks, setClicks] = useState(0);

    const clickHandler = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className='animal-show' onClick={clickHandler}>
            <img className='animal' src={imageMap[type]} alt="animal" />
            <img className='heart' src={heart} alt="heart" style={{ width: 100 + 10 * clicks + 'px' }} />
        </div>
    )
}

export default Animal
