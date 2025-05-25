import { useState } from 'react';
import StaysList from '../layout/StaysList';
import useSearchVenues from '../../hooks/useSearchVenues';
import IsLoadingContainer from '../utilities/IsLoadingContainer';
function QuickSearch() {
  const [filterQuery, setFilterQuery] = useState('house');
  const { stays, loading, error } = useSearchVenues(filterQuery);

  const handleFilterChange = newFilter => {
    setFilterQuery(newFilter);
  };

  return (
    <section className="container mx-auto px-2 pt-12">
      <h4 className="pb-2">Quick Search</h4>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <ul className="flex flex-row flex-wrap  gap-6 bg-primary text-white py-4 px-4 rounded-lg">
          <li>
            <button
              className={`
            cursor-pointer py-1 px-2 
            hover:underline transition-all duration-200 ease-in-out 
            ${
              filterQuery === 'house'
                ? 'font-bold border-l-2 border-white pl-2'
                : ''
            } 
          `}
              onClick={() => handleFilterChange('house')}
            >
              Whole houses
            </button>
          </li>

          <li>
            <button
              className={`
            cursor-pointer py-1 px-2 
            hover:underline transition-all duration-200 ease-in-out
            ${
              filterQuery === 'winter'
                ? 'font-bold border-l-2 border-white pl-2 '
                : ''
            }
          `}
              onClick={() => handleFilterChange('winter')}
            >
              Winter
            </button>
          </li>

          <li>
            <button
              className={`
            cursor-pointer py-1 px-2 
            hover:underline transition-all duration-200 ease-in-out
            ${
              filterQuery === 'unique'
                ? 'font-bold border-l-2 border-white pl-2'
                : ''
            }
          `}
              onClick={() => handleFilterChange('unique')}
            >
              Unique stays
            </button>
          </li>

          <li>
            <button
              className={`
            cursor-pointer py-1 px-2 
            hover:underline transition-all duration-200 ease-in-out
            ${
              filterQuery === 'summer'
                ? 'font-bold border-l-2 border-white pl-2'
                : ''
            }
          `}
              onClick={() => handleFilterChange('summer')}
            >
              Summer
            </button>
          </li>
        </ul>
      </div>
      <StaysList stays={stays} loading={loading} error={error} />
    </section>
  );
}

export default QuickSearch;
