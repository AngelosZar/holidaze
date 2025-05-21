import DateRangeSelector from '../utilities/DateRangeSelector';
import NumberDropDown from '../utilities/NumberDropDown';
import datePickerStore from '../../stores/datePickerStore';
import PriceDropDown from './PriceDropDown';
// import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import useUpdateBooking from '../../hooks/useUpdateBooking';
import useBookingStore from '../../stores/bookingsStore';

function BookAside({ venue }) {
  const [alertMessage, setAlertMessage] = useState('');
  const { checkInDate, checkOutDate, nights, pax, reset } = datePickerStore();
  // const { updateBooking, isLoading, error, setIsLoading, setError } =
  //   useUpdateBooking();
  //
  const { postBooking, isLoading, error, setIsLoading, setError } =
    useBookingStore();
  let id = venue?.id;
  let maxNumberOfGuests = venue?.maxGuests;

  useEffect(() => {
    if (alertMessage && (checkInDate || checkOutDate)) {
      setAlertMessage('');
    }
  }, [checkInDate, checkOutDate, alertMessage]);

  const handleButtonClick = async () => {
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

    // const requestObject = {
    //   dateFrom: checkInDate ? checkInDate.toISOString() : undefined,
    //   dateTo: checkOutDate ? checkOutDate.toISOString() : undefined,
    //   guests: pax || 1,
    // };
    const requestObject = {
      dateFrom: checkInDate ? checkInDate.toISOString() : undefined,
      dateTo: checkOutDate ? checkOutDate.toISOString() : undefined,
      guests: Number(pax || 1),
      venueId: id,
    };
    console.log('requestObject', requestObject);
    // submirt booking data
    // reset();
    console.log('Booking request:', requestObject);
    try {
      console.log('Booking ID:', id);
      console.log('Booking request:', requestObject);
      const res = await postBooking(requestObject);
      console.log('Booking response:', res);
      if (res) {
        console.log('Booking updated successfully:', res);
        alert('Booking updated successfully');
        // create a component to show success message or a simple div with the message a a five second timeout
        reset();
      } else {
        // Handle error
        console.error('Failed to update booking');
        alert('Failed to update booking');
        // setAlertMessage('Failed to update booking');
        // use other state to show error message
      }
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

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
