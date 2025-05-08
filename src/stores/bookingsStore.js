import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BASE_URL, BOOKINGS_ENDPOINT } from '../components/Constants';
import returnHeaders from '../components/utilities/returnHeaders';
const useBookingStore = create(
  persist(set => ({
    isLoading: false,
    error: null,

    setIsLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),

    // getBooking: async () => {},
    // getBookings: async () => {},
    // postBooking: async () => {},
    putBooking: async (id, requestObject, customer = true, venue = true) => {
      try {
        set({ isLoading: true });
        const headers = returnHeaders();
        console.log('headers', headers);
        const response = await fetch(
          // `${BASE_URL}${BOOKINGS_ENDPOINT}/${id}?_customer=${customer}&_venue=${venue}`,
          `https://v2.api.noroff.dev/holidaze/bookings/${id}?_customer=${customer}&_venue=${venue}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              ...headers.headers,
            },
            body: JSON.stringify(requestObject),
          }
        );
        console.log('response', response);
        if (!response.ok) {
          console.error('Failed to update booking:', response.statusText);
          throw new Error('Failed to update booking');
        }
        const data = await response.json();
        console.log(data);
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ isLoading: false, error: error.message });
        console.error('Error updating booking:', error);
      }
    },
    // deleteBooking: async () => {},
  }))
);
export default useBookingStore;

// //
// url
// :
// "https://v2.api.noroff.dev/holidaze/venues/bookings/2ac9cef7-caee-47ce-b1a0-1a9e4dd6b0ea?_customer=true&_venue=true"

// curl -X 'PUT' \
//   'https://api.noroff.dev/api/v1/holidaze/bookings/2ac9cef7-caee-47ce-b1a0-1a9e4dd6b0ea?_customer=false&_venue=false' \
