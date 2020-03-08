import { h, FunctionalComponent } from 'preact';

import './style.css';
import { ICard } from '../../interfaces';
import Rating from '../UI/rating';
import Price from '../UI/price';

const Card: FunctionalComponent<ICard> = (props) => {
  const { image , title, rating, price, color, material, sizes, mechanism, seller } = props;

  return (
    <article className="card">
      <header>
        <div className="card__image" style={{backgroundImage: `url(${image.url})`}}/>
        <h4 className="card__title">{title}</h4>
      </header>
      <div className="card__main">
        <div className="card__row">
          <Rating rating={rating}/>
        </div>
        <div className="card__row">
          <Price value={price.value} discount={price.discount} />
        </div>
        <div className="card__row">
          {color}
        </div>
        <div className="card__row">
          {material}
        </div>
        <div className="card__row">
          {sizes}
        </div>
        <div className="card__row">
          {mechanism}
        </div>
        <div className="card__row">
          <a href={seller.url}>{seller.name}</a>
        </div>
      </div>
      <footer>

      </footer>
    </article>
  )
};

export default Card;