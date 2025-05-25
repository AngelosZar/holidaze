// import BasicDatePicker from './DatePicker';

import { useEffect, useState } from 'react';
import DateRangeSelector from '../utilities/DateRangeSelector';
import useSearchVenues from '../../hooks/useSearchVenues';
import datePickerStore from '../../stores/datePickerStore';

import StaysList from '../layout/StaysList';
import SingleCard from '../SingleCard';
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
    reset,
  } = datePickerStore();

  useEffect(() => {
    if (isSearchPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchPopupOpen]);

  const checkDatesOverlap = (
    existingCheckIn,
    existingCheckOut,
    newCheckIn,
    newCheckOut
  ) => {
    const existingStart = new Date(existingCheckIn);
    const existingEnd = new Date(existingCheckOut);
    const newStart = new Date(newCheckIn);
    const newEnd = new Date(newCheckOut);

    return newStart < existingEnd && newEnd > existingStart;
  };
  const checkVenuesAvailability = (venue, checkIn, checkOut) => {
    if (!checkIn || !checkOut || !venue) return true;

    if (!venue.bookings || venue.bookings.length === 0) return true;
    const hasConflict = venue.bookings.some(booking => {
      checkDatesOverlap(booking.dateFrom, booking.dateTo, checkIn, checkOut);
    });
    return !hasConflict;
  };

  const handleSubmitSearchQuery = async function () {
    try {
      const data = await searchVenues(searchQuery, 99, 1);

      if (data?.data) {
        const availableVenues = data.data.filter(venue =>
          checkVenuesAvailability(venue, checkInDate, checkOutDate)
        );
        setSearchResults(availableVenues);
        console.log('availableVenues', availableVenues);
        setIsSearchPopupOpen(true);
      }

      return [];
    } catch (error) {
      console.error('Error searching venues:', error);
      return [];
    }
  };
  return (
    <>
      <div
        className="
          grid grid-rows-3 grid-cols-1 gap-4 border-2
          sm:grid-rows-2 sm:grid-cols-2
          md:grid-rows-1 md:grid-cols-3
          lg:grid-cols-[2fr_2fr_1fr]
          border-primary bg-white rounded-lg p-4
          absolute   
          bottom-[10%] 
          left-1/2 -translate-x-1/2 
          shadow-lg w-[calc(100%-2rem)] 
          sm:w-[calc(90%-2rem)] 
          max-w-[90%]
        "
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
        </div>
        <DateRangeSelector searchResults={searchResults} />

        <div className="w-full flex justify-center items-center sm:col-span-2 md:col-span-1">
          <button
            className="btn btn-primary w-full max-w-[8rem]"
            onClick={handleSubmitSearchQuery}
          >
            Search
          </button>
        </div>
      </div>
      {isSearchPopupOpen && (
        <SearchPopUp
          searchResults={searchResults}
          setIsSearchPopupOpen={setIsSearchPopupOpen}
          setSearchQuery={setSearchQuery}
          reset={reset}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
}
function SearchPopUp({
  searchResults: stays,
  loading,
  error,
  setIsSearchPopupOpen,
  reset,
  setSearchQuery,
}) {
  const handleClick = function () {
    console.log('clicked');
    setSearchQuery('');
    reset();
    setIsSearchPopupOpen(false);
  };

  return (
    <section className="fixed inset-0 bg-white z-[100] mx-auto">
      <div className="relative w-full h-full overflow-auto">
        <div className="min-h-full bg-white bg-opacity-95 px-6 py-8 max-w-8xl mx-auto rounded-lg shadow-lg ">
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-white bg-opacity-95 py-4 z-10 border-b-2 border-primary">
            <h2 className="text-3xl font-bold text-primary mb-4 mx-auto">
              Available Properties
            </h2>
            <button
              onClick={handleClick}
              className="text-primary hover:text-primary60 text-4xl font-light mr-2"
            >
              ×
            </button>
          </div>

          <StaysList stays={stays} loading={loading} error={error} />
        </div>
      </div>
    </section>
  );
}
