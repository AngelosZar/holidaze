import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useVenueStore = create(
  persist(set => ({
    singleVenue: {},
    venues: [],
    isLoading: false,
    error: null,
    setIsLoading: isLoading => set({ isLoading }),
    setError: error => set({ error }),

    // fetchVenue: async () => {},
    // fetchVenues: async () => {},
    // postVenue: async () => {},
    // putVenue: async () => {},
    // deleteVenue: async () => {},
  }))
);
export default useVenueStore;
