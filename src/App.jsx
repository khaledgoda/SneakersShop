import { useState } from 'react';
import "./index.css";
import { SNEAKERS } from './data';

const App = () => {
  const [filteredSneakers, setFilteredSneakers] = useState(SNEAKERS);
  const [searchText, setSearchText] = useState('');

  const search = (text) => {
    const input = text.target.value;
    setSearchText(input);
    const filtered = SNEAKERS.filter(sneaker =>
      sneaker.model.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredSneakers(filtered);
  };

  const showAll = () => {
    setFilteredSneakers(SNEAKERS);
  };

  const showByBrand = (brand) => {
    const sneaker = SNEAKERS.filter(sneaker => sneaker.brand === brand);
    setFilteredSneakers(sneaker);
  };

  const brands = [`Nike`, `Adidas`, `Saucony`, `Vans`];

  return (
    <>
      <div className='header'>
        <div className="container">
          <div className="Btns">
            <button onClick={showAll}>All</button>
            {brands.map(brand => (
              <button key={brand} onClick={() => showByBrand(brand)}>{brand}</button>
            ))}
          </div>
          <div className="search">
            <input type="text" placeholder="Search Sneakers" onChange={search} value={searchText} />
          </div>
        </div>
      </div>
      <div className='cards'>
        <div className="container">
          {filteredSneakers.map(sneaker => (
            <div className='card' key={sneaker.id}>
              <p>{sneaker.model}</p>
              <img src={sneaker.imageUrl} />
              <p>{sneaker.model}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;