import useBookingStore from '../stores/bookingsStore';

function useUpdateBooking() {
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
