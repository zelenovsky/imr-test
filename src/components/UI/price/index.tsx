import { h, FunctionalComponent } from 'preact';

import './style.css';
import { IPrice } from '../../../interfaces';

const Price: FunctionalComponent<IPrice> = ({ value, discount }) => {
  return discount ? (
      <div className="price">
        <div className="price__value price__value--discount overflow-ellipsis">{value}</div>
        <div className="price__value price__value--old-value overflow-ellipsis">{discount.value}</div>
      </div>
  ) : (
      <div className="price">
        <div className="price__value overflow-ellipsis">{value}</div>
      </div>
  )
};

export default Price;