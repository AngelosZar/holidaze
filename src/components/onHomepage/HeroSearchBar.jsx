// import BasicDatePicker from './DatePicker';

import { useState } from 'react';
import DateRangeSelector from '../utilities/DateRangeSelector';
import useSearchVenues from '../../hooks/useSearchVenues';
import datePickerStore from '../../stores/datePickerStore';

export default function HeroSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
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
  const checkVenuesAvailability = (venueBookings, checkIn, checkOut) => {
    if (!checkIn || !checkOut || !venueBookings) return true;
    const hasConflict = venueBookings.some(booking => {
      checkDatesOverlap(booking.dateFrom, booking.dateTo, checkIn, checkOut);
    });
    return !hasConflict;
  };

  const handleSubmitSearchQuery = async function (e) {
    // all data else not submit
    console.log(e.target.value);
    const data = await searchVenues(searchQuery, 12, 1);
    console.log('search data', data);
    // async /?? try and catch maybe
    // checkVenuesAvailability(data?.data[0]?.data, checkInDate, checkOutDate);
    // filter out venues that are not available
    console.log(data.data);
    // console.log(data.data.data);  undefined
    if (data?.data) {
      const availableVenues = data.data.filter(venue => {
        // one more layer of data in
        const venueBookings = venue.bookings || [];
        return checkVenuesAvailability(
          venueBookings,
          checkInDate,
          checkOutDate
        );
      });
      console.log('available venues', availableVenues);
    }
    // console.log(data.data[0].bookings);
    //     {data: Array(12), meta: {…}}
    // data
    // :
    // Array(12)
    // 0
    // :
    // bookings
    // :
    // Array(1)
    // 0
    // :
    // {id: '69212f7f-fd79-44f4-ab62-b54945286872', dateFrom: '2025-05-04T22:00:00.000Z', dateTo: '2025-05-05T22:00:00.000Z', guests: 1, created: '2025-05-04T12:42:58.016Z', …}
    // length
    // :
    // 1
    // [[Prototype]]
    // :
    // Array(0)
    // created
    // :
  };
  return (
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
      <DateRangeSelector />
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
  );
}
