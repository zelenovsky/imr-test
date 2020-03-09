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
          <span className="overflow-ellipsis">
            {color}
          </span>
        </div>
        <div className="card__row">
          <span className="overflow-ellipsis">
            {material}
          </span>
        </div>
        <div className="card__row">
          <span className="overflow-ellipsis">
            {sizes}
          </span>
        </div>
        <div className="card__row">
          <span className="overflow-ellipsis">
            {mechanism}
          </span>
        </div>
        <div className="card__row">
          <a href={seller.url} className="overflow-ellipsis">{seller.name}</a>
        </div>
      </div>
      <footer>
        <button className="btn-like" type="button">
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2817 0C16.896 0 18.3736 0.643222 19.4368 1.80929C20.4458 2.91603 21 4.39419 21 5.97066C21 7.68506 20.3095 9.27481 18.8441 10.9594C18.2393 11.6547 17.4908 12.3851 16.5242 13.238C15.7829 13.8922 15.1443 14.4268 13.5889 15.7077C12.3869 16.6979 11.8373 17.1537 11.1167 17.7631L11.0906 17.7854C10.9255 17.925 10.7158 18 10.5 18C10.2842 18 10.0745 17.925 9.90922 17.7854L9.88329 17.7633C9.16199 17.1533 8.60822 16.6938 7.41114 15.7079C5.85552 14.4266 5.21709 13.8922 4.47562 13.238C3.50923 12.3851 2.76045 11.6547 2.15593 10.9597C0.69028 9.27481 0 7.68506 0 5.97066C0 4.39419 0.554215 2.91603 1.56315 1.80929C2.62616 0.643222 4.104 0 5.71812 0C6.77404 0 7.71384 0.281879 8.5373 0.796802C9.20432 1.21384 9.76784 1.76517 10.2359 2.4039C10.4216 2.66607 10.3338 2.5352 10.5 2.79609C10.6662 2.5352 10.5784 2.66607 10.7639 2.4039C11.2322 1.76517 11.7957 1.21384 12.4625 0.796802C13.2862 0.281879 14.2257 0 15.2817 0ZM15.2817 1.73326C14.5821 1.73326 13.9603 1.92432 13.4071 2.27602C12.952 2.5654 12.5589 2.95331 12.2271 3.4059C11.8141 3.96944 11.5271 4.56918 11.3525 5.08711C11.2322 5.44374 10.8882 5.68535 10.5 5.68535C10.1118 5.68535 9.76762 5.44374 9.64751 5.08711C9.47289 4.56918 9.18592 3.96944 8.77286 3.4059C8.44113 2.95331 8.04801 2.5654 7.59263 2.27602C7.03974 1.92432 6.41793 1.73326 5.71812 1.73326C4.62343 1.73326 3.62779 2.16636 2.90848 2.95523C2.19028 3.74282 1.79318 4.81337 1.79318 5.97066C1.79318 7.30251 2.37465 8.53563 3.6094 9.93346C4.16428 10.5613 4.85478 11.2293 5.75602 12.0212C6.45694 12.6372 7.06566 13.1462 8.57409 14.3885C9.21739 14.9188 9.86135 15.4483 10.5 15.9842C11.1386 15.4487 11.7822 14.9186 12.4257 14.3887C13.9341 13.1462 14.5431 12.6372 15.244 12.0212C16.145 11.2293 16.8357 10.5613 17.3904 9.93346C18.6254 8.53563 19.2068 7.30251 19.2068 5.97066C19.2068 4.81337 18.8095 3.74282 18.0915 2.95523C17.3722 2.16636 16.3764 1.73326 15.2817 1.73326Z" fill="#FF9F9F"/>
          </svg>
        </button>
        <button className="btn-buy" type="button">
          <span>Купить</span>
        </button>
      </footer>
    </article>
  )
};

export default Card;