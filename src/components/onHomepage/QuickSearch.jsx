import { useState } from 'react';
import useGetFilteredVenues from '../../hooks/useGetFilteredVenues';
import useVenueStore from '../../stores/venuesStore';
import SingleCard from '../SingleCard';
import StaysList from '../layout/StaysList';
function QuickSearch() {
  const [filterQuery, setFilterQuery] = useState('rating');
  const { getVenues } = useVenueStore();
  const { stays, loading, error } = useGetFilteredVenues(
    getVenues,
    filterQuery
  );

  const handleFilterChange = newFilter => {
    setFilterQuery(newFilter);
  };

  return (
    <section className="container mx-auto px-4">
      <h4>Quick Search</h4>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <ul className="flex flex-col md:flex-row gap-8 bg-primary text-white py-4 px-2 rounded-lg">
          <li className="" onClick={() => handleFilterChange('price')}>
            Category 1
          </li>
          <li className="" onClick={() => handleFilterChange('name')}>
            Category 2
          </li>
          <li className="">Category 3</li>
          <li className="">Category 4</li>
        </ul>
      </div>
      <StaysList stays={stays} loading={loading} error={error} />
    </section>
  );
}

export default QuickSearch;
