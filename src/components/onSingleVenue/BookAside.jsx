import DateRangeSelector from '../utilities/DateRangeSelector';
import NumberDropDown from '../utilities/NumberDropDown';
import datePickerStore from '../../stores/datePickerStore';
import dayjs from 'dayjs';
import { use, useEffect, useState } from 'react';

function BookAside({ venue }) {
  const [alertMessage, setAlertMessage] = useState('');
  const { checkInDate, checkOutDate, nights, pax, reset } = datePickerStore();

  let maxNumberOfGuests = venue?.maxGuests;

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
    // submirt booking data
    // reset();
  }
  // or just disable the button???
  // const isBookButtonDisabled = !checkInDate || !checkOutDate;

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

function PriceDropDown({ venue }) {
  const {
    nights,
    pax,
    pricePerNight,
    setPricePerNight,
    totalPrice,
    calculateTotalPrice,
  } = datePickerStore();
  useEffect(() => {
    if (venue?.price) {
      setPricePerNight(venue.price);
    }
  }, [venue?.price, setPricePerNight]);

  useEffect(() => {
    calculateTotalPrice();
  }, [nights, pricePerNight, calculateTotalPrice]);

  return (
    <div className="w-full flex flex-col text-center max-w-sm mx-auto">
      <span className="flex flex-row justify-between mt-4">
        <p>Price per night</p> <p>{pricePerNight} nok</p>
      </span>
      <span className="flex flex-row justify-between mt-4">
        <p>Booked days</p> <p>{nights} </p>
      </span>
      <span className="flex flex-row justify-between mt-4 mb-4">
        <p>Number of guests</p> <p>{pax} </p>
      </span>
      <hr />
      <span className="flex flex-row justify-between mt-4">
        <p>Cleaning fee</p> <p> 0 nok</p>
      </span>
      <span className="flex flex-row justify-between mt-4">
        <p>Taxes </p> <p>0 nok </p>
      </span>
      <hr className="my-6" />
      <span className="flex flex-row justify-between mt-4">
        <p>Total </p> <p>{totalPrice}</p>
      </span>
    </div>
  );
}
