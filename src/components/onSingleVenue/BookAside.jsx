import DateRangeSelector from '../utilities/DateRangeSelector';
import NumberDropDown from '../utilities/NumberDropDown';
import datePickerStore from '../../stores/datePickerStore';
import dayjs from 'dayjs';

function BookAside({ venue }) {
  const { checkInDate, checkOutDate, nights, pax, reset } = datePickerStore();

  let maxNumberOfGuests = venue?.maxGuests;

  function handleButtonClick() {
    // Format dates safely
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

  const isBookButtonDisabled = !checkInDate || !checkOutDate;

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
        disabled={isBookButtonDisabled}
      >
        Book
      </button>
      {isBookButtonDisabled && (
        <p>Please select both check-in and check-out dates to book.</p>
      )}
      <PriceDropDown venue={venue} />
    </div>
  );
}

export default BookAside;

function PriceDropDown({ venue }) {
  return (
    <div className="w-full flex flex-col text-center max-w-sm mx-auto">
      <span className="flex flex-row justify-between mt-4">
        <p>Price per night</p> <p>{venue?.price} nok</p>
      </span>
      <span className="flex flex-row justify-between mt-4">
        <p>Booked days</p> <p>2 days </p>
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
        <p>Total </p> <p>{venue?.price}</p>
      </span>
    </div>
  );
}
