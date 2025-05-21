import useBookingStore from '../stores/bookingsStore';

function useCreateBooking({ requestObject }) {
  const { postBooking, isLoading, error } = useBookingStore();

  const createBooking = async () => {
    return await postBooking(requestObject);
  };

  return { isLoading, error, createBooking };
}

export default useCreateBooking;
