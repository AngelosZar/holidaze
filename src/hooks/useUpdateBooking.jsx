import { useState } from 'react';
import useBookingStore from '../stores/bookingsStore';

function useUpdateBooking() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
  const { putBooking, isLoading, setIsLoading, error, setError } =
    useBookingStore();

  const updateBooking = async (
    id,
    requestObject,
    customer = false,
    venue = false
  ) => {
    return await putBooking(id, requestObject, customer, venue);
  };
  return { updateBooking, isLoading, error, setIsLoading, setError };
}
export default useUpdateBooking;
// Update booking
// PUT
// /holidaze/bookings/<id>
// Updating a booking.

// Request

// {
//   "dateFrom": "string", // Optional - Instance of new Date()
//   "dateTo": "string", // Optional - Instance of new Date()
//   "guests": 0 // Optional
// }
