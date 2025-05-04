import { useEffect } from 'react';
import useVenueStore from '../stores/venuesStore';

function useGetVenueWithId(id) {
  const { getVenue, singleVenue, isLoading, error } = useVenueStore(
    state => state
  );

  useEffect(() => {
    async function fetchVenue() {
      try {
        const data = await getVenue(id);
        // console.log('data', data);
        return data;
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchVenue();
  }, [getVenue, id]);
  return {
    venue: singleVenue,
    isLoading,
    error,
  };
}

export default useGetVenueWithId;
