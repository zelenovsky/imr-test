import { h, FunctionalComponent } from 'preact';

import './style.css';
import { IRating } from '../../../interfaces';

const Rating: FunctionalComponent<IRating> = ({ rating }) => {
  const starsNumber = Math.round(parseFloat(rating)).toString();
  return (
    <div className="rating">
      <div className={'rating__stars rating__stars--' + starsNumber}/>
      <span className="rating__number">{rating}</span>
    </div>
  )
};

export default Rating;