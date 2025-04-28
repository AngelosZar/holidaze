import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useBookingStore = create(
  persist(set => ({
    isLoading: false,
    error: null,

    setIsLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),

    // getBooking: async () => {},
    // getBookings: async () => {},
    // postBooking: async () => {},
    // putBooking: async () => {},
    // deleteBooking: async () => {},
  }))
);
export default useBookingStore;
