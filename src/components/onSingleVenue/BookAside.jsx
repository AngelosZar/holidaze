import DateRangeSelector from '../utilities/DateRangeSelector';
import NumberDropDown from '../utilities/NumberDropDown';
import datePickerStore from '../../stores/datePickerStore';
import PriceDropDown from './PriceDropDown';
// import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function BookAside({ venue }) {
  const [alertMessage, setAlertMessage] = useState('');
  const { checkInDate, checkOutDate, nights, pax, reset } = datePickerStore();

  let maxNumberOfGuests = venue?.maxGuests;
  // let requestObject = {
  //   dateFrom: checkInDate, // Optional - Instance of new Date()
  //   dateTo: checkOutDate, // Optional - Instance of new Date()
  //   guests: pax, // Optional
  // };
  useEffect(() => {
    if (alertMessage && (checkInDate || checkOutDate)) {
      setAlertMessage('');
    }
  }, [checkInDate, checkOutDate, alertMessage]);

  function handleButtonClick() {
    if (!checkInDate || !checkOutDate) {
      setAlertMessage('No inputs');
      return;
    }

    const formattedCheckIn =
      checkInDate && typeof checkInDate.format === 'function'
        ? checkInDate.format('YYYY-MM-DD') //check again api format
        : undefined;

    const formattedCheckOut =
      checkOutDate && typeof checkOutDate.format === 'function'
        ? checkOutDate.format('YYYY-MM-DD')
        : undefined;

    console.log('Booking Data:', {
      checkInDate: formattedCheckIn,
      checkOutDate: formattedCheckOut,
      nights,
      pax,
      price: venue?.price,
    });
    const requestObject = {
      dateFrom: checkInDate ? checkInDate.toISOString() : undefined,
      dateTo: checkOutDate ? checkOutDate.toISOString() : undefined,
      guests: pax || 1,
    };

    console.log('requestObject', requestObject);
    // submirt booking data
    // reset();
  }
  // or just disable the button???
  // const isBookButtonDisabled = !checkInDate || !checkOutDate;
  // {
  //   "dateFrom": "string", // Required - Instance of new Date()
  //   "dateTo": "string", // Required - Instance of new Date()
  //   "guests": 0, // Required
  //   "venueId": "string" // Required - The id of the venue to book
  // }
  return (
    <div className="w-full flex flex-col max-w-md p-8 bg-white rounded-lg shadow-md border-2 border-primary">
      <h6>Price {venue.price} nok</h6>
      <hr className="my-6" />
      <DateRangeSelector />
      <hr className="my-6" />
      <NumberDropDown maxNumberOfGuests={maxNumberOfGuests} />
      <hr className="my-6" />
      <button
        className="btn-primary mb-4 w-full max-w-[60%] mx-auto"
        onClick={handleButtonClick}
        // disabled={isBookButtonDisabled}
      >
        Book
      </button>
      {/* add styles */}
      {alertMessage === 'No inputs' ? (
        <p>Please select both check-in and check-out dates to book.</p>
      ) : (
        ''
      )}
      <PriceDropDown venue={venue} />
    </div>
  );
}

export default BookAside;
