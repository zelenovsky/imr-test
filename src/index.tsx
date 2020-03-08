import { h, render } from 'preact';

import data from './data.json';
import CardList from './components/card-list';
import './style.css';

const App = () => {
  return (
    <section className="container">
      <CardList cards={data} />
    </section>
  )
};

render(<App />, document.getElementById('root'));