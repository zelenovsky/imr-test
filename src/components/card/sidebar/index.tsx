import { h, FunctionalComponent } from 'preact';

import { ICard } from '../../../interfaces';

const CardSidebar: FunctionalComponent<ICard> = (props) => {
  const { rating, price, color, material, sizes, mechanism, seller } = props;

  return (
    <article className="card card--sidebar">
      <div className="card__main">
        <div className="row">
          <span className="overflow-ellipsis">{rating.label}</span>
        </div>
        <div className="row">
          <span className="overflow-ellipsis">{price.label}</span>
        </div>
        <div className="row">
          <span className="overflow-ellipsis">{color.label}</span>
        </div>
        <div className="row">
          <span className="overflow-ellipsis">{material.label}</span>
        </div>
        <div className="row">
          <span className="overflow-ellipsis">{sizes.label}</span>
        </div>
        <div className="row">
          <span className="overflow-ellipsis">{mechanism.label}</span>
        </div>
        <div className="row">
          <span className="overflow-ellipsis">{seller.label}</span>
        </div>
      </div>
      <footer aria-hidden="true" />
    </article>
  )
};

export default CardSidebar;