import { h, FunctionalComponent, createRef } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import './style.css';
import { ICardList } from '../../interfaces';
import Card from '../card';

const CardList: FunctionalComponent<ICardList> = ({ cardsData }) => {
  const [cardsToRender, setCardsToRender] = useState<number>(1);
  const cardList = createRef();
  const cardItem = createRef();

  const renderCards = () => {
    if ((cardList.current.getBoundingClientRect().right + 10) > cardItem.current.getBoundingClientRect().right) {
      setCardsToRender(cardsToRender + 1);
    }
  };

  useEffect(renderCards, [cardsToRender]);

  return (
    <ul className="card-list" ref={cardList} onScroll={renderCards}>
      {cardsData.map((cardOptions, index) => {
        if (cardsToRender <= index) return;
        return (
          <li ref={cardItem}>
            <Card {...cardOptions} />
          </li>
        )
      })}
    </ul>
  )
};

export default CardList;