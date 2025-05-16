import { useEffect } from 'react';
import useVenueStore from '../stores/venuesStore';

function useGetVenueWithId(id) {
  const { getVenue, singleVenue, isLoading, error, clearSingleVenue } =
    useVenueStore(state => state);

  useEffect(() => {
    if (!id) return;
    clearSingleVenue();
    async function fetchVenue() {
      try {
        await getVenue(id);
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchVenue();
  }, [getVenue, id, clearSingleVenue]);
  return {
    venue: singleVenue,
    isLoading,
    error,
  };
}

export default useGetVenueWithId;
