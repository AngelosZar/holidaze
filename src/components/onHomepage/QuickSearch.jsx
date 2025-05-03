import { useState } from 'react';
import StaysList from '../layout/StaysList';
import useSearchVenues from '../../hooks/useSearchVenues';

function QuickSearch() {
  const [filterQuery, setFilterQuery] = useState('price');

  const { stays, loading, error, setPage, setLimit, setSort } =
    useSearchVenues(filterQuery);

  const handleFilterChange = newFilter => {
    setFilterQuery(newFilter);
  };

  return (
    <section className="container mx-auto px-4">
      <h4>Quick Search</h4>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <ul className="flex flex-col md:flex-row gap-8 bg-primary text-white py-4 px-2 rounded-lg">
          <li>
            <button
              className={`cursor-pointer ${
                filterQuery === 'home' ? 'font-extrabold' : ''
              }`}
              onClick={() => handleFilterChange('home')}
            >
              Category 1
            </button>
          </li>
          <li className="" onClick={() => handleFilterChange('hotel')}>
            Category 2
          </li>
          <li className="" onClick={() => handleFilterChange('summer')}>
            Category 3
          </li>
          <li className="" onClick={() => handleFilterChange('sport')}>
            Category 4
          </li>
        </ul>
      </div>
      <StaysList stays={stays} loading={loading} error={error} />
    </section>
  );
}

export default QuickSearch;
