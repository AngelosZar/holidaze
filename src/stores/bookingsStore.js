import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  BASE_URL,
  BOOKINGS_URL,
  BOOKINGS_ENDPOINT,
} from '../components/Constants';
import returnHeaders from '../components/utilities/returnHeaders';
const useBookingStore = create(
  // persist
  set => ({
    isLoading: false,
    error: null,

    setIsLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),

    getBookings: async (customer = true, venue = true) => {
      try {
        set({ isLoading: true });
        const headers = returnHeaders();
        // console.log('headers', headers);
        const res = await fetch(
          // `${BASE_URL}${BOOKINGS_ENDPOINT}?_customer=${customer}&_venue=${venue}`,
          `${BASE_URL}${BOOKINGS_ENDPOINT}?_customer=${customer}&_venue=${venue}`,
          {
            method: 'GET',
            headers,
          }
        );

        console.log('res', res);
        if (!res.ok) {
          console.error('Failed to fetch booking:', res.statusText);
          // or check if its object res.status. somethng
          throw new Error('Failed to fetch booking');
        }
        const data = await res.json();
        // console.log('data', data);
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ isLoading: false, error: error.message });
        console.error('Error fetching booking:', error);
      }
    },
    getBooking: async (id, customer = true, venue = true) => {
      try {
        set({ isLoading: true });
        const headers = returnHeaders();
        // console.log('headers', headers);
        const res = await fetch(
          // `${BASE_URL}${BOOKINGS_ENDPOINT}/${id}?_customer=${customer}&_venue=${venue}`,
          `https://v2.api.noroff.dev/holidaze/bookings/${id}?_customer=${customer}&_venue=${venue}`,
          {
            method: 'GET',
            headers,
          }
        );
        // console.log('res', res);
        if (!res.ok) {
          console.error('Failed to fetch booking:', res.statusText);
          throw new Error('Failed to fetch booking');
        }
        const data = await res.json();
        // console.log('data', data);
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ isLoading: false, error: error.message });

        console.error('Error fetching booking:', error);
        throw error;
      }
    },
    postBooking: async requestObject => {
      try {
        set({ isLoading: true, error: null, isResponseOk: false });
        const headers = returnHeaders();
        const response = await fetch(BOOKINGS_URL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(requestObject),
        });

        if (!response.ok && response.status === 409) {
          const errorMsg =
            'Ops the venue is already booked for the selected dates \nPlease try with different dates';
          alert(errorMsg);
          set({
            isLoading: false,
            error:
              errorMsg ||
              'The selected dates and guests either overlap with an existing booking or exceed the maximum guests for this venue.',
          });
        } else if (!response.ok) {
          const errorMsg = response.statusText || 'Ops something went wrong';
          alert(errorMsg);
          set({
            isLoading: false,
            error: errorMsg,
          });
          return { ok: false, error: errorMsg };
        }
        if (response.ok)
          alert(
            'Booking Created successfully \nYou will soon receive an email confirmation soon\n Thank you for booking with us'
          );
        const data = await response.json();

        set({ isLoading: false, setError: null });
        return data;
      } catch (error) {
        set({ isLoading: false, error: error.message });
        console.error('Error updating booking:', error);
      }
    },
    putBooking: async (id, requestObject, customer = true, venue = true) => {
      try {
        set({ isLoading: true });
        const headers = returnHeaders();
        // console.log('headers', headers);
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
        // console.log('response', response);
        if (!response.ok) {
          console.error('Failed to update booking:', response.statusText);
          throw new Error('Failed to update booking');
        }
        const data = await response.json();
        // console.log(data);
        set({ isLoading: false });
        return data;
      } catch (error) {
        set({ isLoading: false, error: error.message });
        console.error('Error updating booking:', error);
      }
    },
    deleteBooking: async id => {
      // Returns an empty 204 No Content response on success.
      try {
        set({ isLoading: true });
        const headers = returnHeaders();
        // console.log('headers', headers);
        const response = await fetch(`${BASE_URL}${BOOKINGS_ENDPOINT}/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            ...headers.headers,
          },
        });
        // console.log('response', response);
        if (!response.ok) {
          console.error('Failed to delete booking:', response.statusText);
          throw new Error('Failed to delete booking');
        }
        set({ isLoading: false });
      } catch (error) {
        set({ isLoading: false, error: error.message });
        console.error('Error deleting booking:', error);
      }
    },
  })
);
export default useBookingStore;

// //
// url
// :
// "https://v2.api.noroff.dev/holidaze/venues/bookings/2ac9cef7-caee-47ce-b1a0-1a9e4dd6b0ea?_customer=true&_venue=true"

// curl -X 'PUT' \
//   'https://api.noroff.dev/api/v1/holidaze/bookings/2ac9cef7-caee-47ce-b1a0-1a9e4dd6b0ea?_customer=false&_venue=false' \
// {
//   "errors": [
//     {
//       "message": "The selected dates and guests either overlap with an existing booking or exceed the maximum guests for this venue."
//     }
//   ],
//   "status": "Conflict",
//   "statusCode": 409}
