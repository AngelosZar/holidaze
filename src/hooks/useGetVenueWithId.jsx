import { useEffect } from 'react';
import useVenueStore from '../stores/venuesStore';

function useGetVenueWithId(id) {
  const { getProfileBookings, singleVenue, isLoading, error } = useVenueStore(
    state => state
  );
  useEffect(
    function () {
      async () => {
        try {
          const data = await getProfileBookings(id);
          console.log('data', data);
        } catch (error) {
          console.log('error', error);
          throw error;
        }
      };
    },
    [getProfileBookings, id]
  );
  return {
    venue: singleVenue,
    isLoading,
    error,
  };
}

export default useGetVenueWithId;
