import DateRangeSelector from '../utilities/DateRangeSelector';
import NumberDropDown from '../utilities/NumberDropDown';
import datePickerStore from '../../stores/datePickerStore';
import PriceDropDown from './PriceDropDown';
// import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import useUpdateBooking from '../../hooks/useUpdateBooking';
import useBookingStore from '../../stores/bookingsStore';
import useCreateBooking from '../../hooks/useCreateBooking';

function BookAside({ venue }) {
  const [alertMessage, setAlertMessage] = useState('');
  const { checkInDate, checkOutDate, nights, pax, reset } = datePickerStore();
  let id = venue?.id;
  let maxNumberOfGuests = venue?.maxGuests;
  // const venueBookings = venue?.bookings || [];
  const requestObject = {
    dateFrom: checkInDate ? checkInDate.toISOString() : undefined,
    dateTo: checkOutDate ? checkOutDate.toISOString() : undefined,
    guests: Number(pax || 1),
    venueId: id,
  };
  const { createBooking } = useCreateBooking({
    requestObject,
  });

  useEffect(() => {
    if (alertMessage === 'No inputs' && checkInDate && checkOutDate) {
      setAlertMessage('');
    }
  }, [checkInDate, checkOutDate, alertMessage]);

  const handleButtonClick = async () => {
    if (!checkInDate || !checkOutDate) {
      setAlertMessage('No inputs');
      return;
    } else {
      setAlertMessage('');
    }
    await createBooking();
    reset();
  };

  return (
    <div className="w-full flex flex-col max-w-md p-8 bg-white rounded-lg shadow-md border-2 border-primary">
      <h6>Price {venue.price} nok</h6>
      <hr className="my-6" />
      <DateRangeSelector venueBookings={venue?.bookings || []} />
      <hr className="my-6" />
      <NumberDropDown maxNumberOfGuests={maxNumberOfGuests} />
      <hr className="my-6" />
      <button
        className={`submit-button ${
          !checkOutDate ? 'button-disabled' : ''
        } btn-primary mb-4 w-full max-w-[60%] mx-auto`}
        onClick={handleButtonClick}
      >
        Book
      </button>
      {/* add styles */}
      {alertMessage === 'No inputs' ? (
        // set errorbox styles
        <p className="inline-alertMessage">
          Please select both check-in and check-out dates to book.
        </p>
      ) : (
        ''
      )}

      <PriceDropDown venue={venue} />
    </div>
  );
}

export default BookAside;
