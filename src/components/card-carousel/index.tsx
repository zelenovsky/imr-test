import { h, FunctionalComponent } from 'preact';

import './style.css';
import data from './data.json';
import CardSidebar from '../card/sidebar';
import CardList from '../card-list';

const CardCarousel: FunctionalComponent = () => {
  return (
    <section className="container card-carousel">
      <CardSidebar {...data[0]}/>
      <CardList cardsData={data} />
    </section>
  )
};

export default CardCarousel;