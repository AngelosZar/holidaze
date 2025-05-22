// import BasicDatePicker from './DatePicker';

import { use, useEffect, useState } from 'react';
import DateRangeSelector from '../utilities/DateRangeSelector';
import useSearchVenues from '../../hooks/useSearchVenues';
import datePickerStore from '../../stores/datePickerStore';
import { is } from 'date-fns/locale';
import StaysList from '../layout/StaysList';

export default function HeroSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const { stays, loading, error, setPage, setLimit, setSort, searchVenues } =
    useSearchVenues();
  const {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    nights,
    setNights,
  } = datePickerStore();

  const checkDatesOverlap = (
    existingCheckIn,
    existingCheckOut,
    newCheckIn,
    newCheckOut
  ) => {
    // if (!checkInDate || !checkOutDate) {
    //   return false;
    // }
    const existingStart = new Date(existingCheckIn);
    const existingEnd = new Date(existingCheckOut);
    const newStart = new Date(newCheckIn);
    const newEnd = new Date(newCheckOut);

    return newStart < existingEnd && newEnd > existingStart;
  };
  const checkVenuesAvailability = (venue, checkIn, checkOut) => {
    if (!checkIn || !checkOut || !venue) return true;
    // or
    // if (checkIn || !checkOut ){return false}
    if (!venue.bookings || venue.bookings.length === 0) return true;
    const hasConflict = venue.bookings.some(booking => {
      checkDatesOverlap(booking.dateFrom, booking.dateTo, checkIn, checkOut);
    });
    return !hasConflict;
  };

  const handleSubmitSearchQuery = async function () {
    try {
      const data = await searchVenues(searchQuery, 99, 1);
      console.log('search data', data);

      if (data?.data) {
        const availableVenues = data.data.filter(venue =>
          checkVenuesAvailability(venue, checkInDate, checkOutDate)
        );
        setSearchResults(availableVenues);
        console.log('availableVenues', availableVenues);

        // return availableVenues;
      }
      console.log(searchResults);
      return [];
    } catch (error) {
      console.error('Error searching venues:', error);
      return [];
    }
  };
  return (
    <>
      <div
        className="grid grid-rows-3 grid-cols-1 gap-4 border-2 
                    sm:grid-rows-2 sm:grid-cols-2
                    md:grid-rows-1 md:grid-cols-3 
                    lg:grid-cols-[2fr_2fr_1fr]
                    border-primary bg-white rounded-lg p-4 
                    relative 
                    sm:top-[-100px]
                    md:top-[-200px] 
                    shadow-lg mx-4 sm:mx-auto sm:max-w-[90%]"
      >
        <div className="flex flex-col justify-center ">
          <input
            type="text"
            id="searchBar"
            className="formInput2 relative"
            placeholder="Search for accommodation"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleSubmitSearchQuery(e);
              }
            }}
          />
          {/* <label htmlFor="searchBar" className="text-sm absolute top-0 left-2 ">
          Select a destination
        </label> */}
        </div>
        <DateRangeSelector searchResults={searchResults} />
        {/* <div className="flex flex-col lg:flex-row gap-4 ">
        <span>
          <BasicDatePicker labelMsg={'Check In'} />
        </span>
        <span>
          <BasicDatePicker labelMsg={'Check Out'} />
        </span>
      </div> */}
        <div className="w-full flex justify-center items-center sm:col-span-2 md:col-span-1">
          <button
            className="btn btn-primary w-full max-w-[8rem]"
            onClick={handleSubmitSearchQuery}
          >
            Search
          </button>
        </div>
      </div>
      {isSearchPopupOpen && <SearchPopUp searchResults={searchResults} />}
      {/* <SearchPopUp searchResults={searchResults} /> */}
    </>
  );
}
function SearchPopUp({ searchResults }) {
  console.log('searchResults', searchResults);
  useEffect(() => {
    if (searchResults.length > 0) {
      console.log(searchResults);
      // <StaysList stays={stays} loading={loading} error={error} />;
      // map over the searchResults and display them use card component
    } else {
      console.log('No search results found.');
    }
  }, [searchResults]);

  return (
    <section className="fixed inset-0 bg-white z-50">
      <h1>Search results </h1>
    </section>
  );
}
