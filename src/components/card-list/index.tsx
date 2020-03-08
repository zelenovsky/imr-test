import { h, FunctionalComponent } from 'preact';

import './style.css';
import { ICardList } from '../../interfaces';
import Card from '../card';

const CardList: FunctionalComponent<ICardList> = ({ cards }) => {
  return (
      <ul className="card-list">
        {cards.map(cardOptions => (
            <li>
              <Card {...cardOptions} />
            </li>
        ))}
      </ul>
  )
};

export default CardList;