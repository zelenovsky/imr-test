import { h, FunctionalComponent } from 'preact';

import './style.css';
import { ICardList } from '../../interfaces';
import Card from '../card';

const CardList: FunctionalComponent<ICardList> = ({ cards }) => {
  return (
      <ul className="card-list">
        <li>
          <article className="card card--sidebar">
            <div className="card__main">
              <div className="row">
                <span className="overflow-ellipsis">Рейтинг</span>
              </div>
              <div className="row">
                <span className="overflow-ellipsis">Цена</span>
              </div>
              <div className="row">
                <span className="overflow-ellipsis">Цвет</span>
              </div>
              <div className="row">
                <span className="overflow-ellipsis">Материал</span>
              </div>
              <div className="row">
                <span className="overflow-ellipsis">Размеры</span>
              </div>
              <div className="row">
                <span className="overflow-ellipsis">Механизм</span>
              </div>
              <div className="row">
                <span className="overflow-ellipsis">Продавец</span>
              </div>
            </div>
            <footer />
          </article>
        </li>
        {cards.map(cardOptions => (
            <li>
              <Card {...cardOptions} />
            </li>
        ))}
      </ul>
  )
};

export default CardList;