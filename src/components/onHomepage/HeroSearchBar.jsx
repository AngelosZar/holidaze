// import BasicDatePicker from './DatePicker';

import { use, useEffect, useState } from 'react';
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
        setIsSearchPopupOpen(true);
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
      {isSearchPopupOpen && (
        <SearchPopUp
          searchResults={searchResults}
          setIsSearchPopupOpen={setIsSearchPopupOpen}
          loading={loading}
          error={error}
        />
      )}
      {/* <SearchPopUp searchResults={searchResults} /> */}
    </>
  );
}
function SearchPopUp({
  searchResults: stays,
  loading,
  error,
  setIsSearchPopupOpen,
  isSearchPopupOpen,
}) {
  console.log('searchResults', stays);
  // useEffect(() => {
  //   if (stays.length > 0) {
  //     console.log(stays);
  //     // map over the stays and display them use card component
  //   } else {
  //     console.log('No search results found.');
  //   }
  // }, [stays]);

  return (
    <section className="fixed inset-0 bg-white z-50 mx-auto">
      <div className="relative w-full h-full overflow-auto">
        <div className="min-h-full bg-white bg-opacity-95 p-6 max-w-8xl mx-auto rounded-lg shadow-lg">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-white bg-opacity-95 py-4">
            <h2 className="text-3xl font-bold text-primary mb-4 mx-auto">
              Available Properties
            </h2>
            <button
              onClick={() => setIsSearchPopupOpen(false)}
              // clear all fileds after closing the popup
              className="text-gray-600 hover:text-gray-800 text-4xl font-light"
            >
              ×
            </button>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {stays &&
          stays.map(venue => {
            return (
              <SingleCard
                key={venue.id}
                id={venue.id}
                title={venue.title}
                image={venue.media[0].url || venue.media}
                // image={venue.media[0].url}
                imageAlt={venue.mediaAlt}
                price={venue.price}
                rating={venue.rating}
                location={venue.location}
              />
            );
          })}
      </div> */}

          <StaysList stays={stays} loading={loading} error={error} />
        </div>
      </div>
    </section>
  );
}
