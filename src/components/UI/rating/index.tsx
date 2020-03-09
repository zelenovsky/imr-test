import { h, FunctionalComponent } from 'preact';

import './style.css';
import { IRating } from '../../../interfaces';

const Rating: FunctionalComponent<IRating> = ({ value }) => {
  const starsNumber = Math.round(parseFloat(value)).toString();
  return (
    <div className="rating">
      <div className={'rating__stars rating__stars--' + starsNumber}/>
      <span className="rating__number">{value}</span>
    </div>
  )
};

export default Rating;