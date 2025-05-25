import { useEffect, useState } from 'react';
import useProfileStore from '../stores/profileStore';

function useGetUserVenues(initialUser = 'angZar') {
  const { getProfileVenues, isLoading, error } = useProfileStore(
    state => state
  );
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    async function fetchVenues() {
      try {
        const data = await getProfileVenues(user);
        console.log('data', data);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchVenues();
  }, [getProfileVenues, user]);

  return {
    getProfileVenues,
    user,
    setUser,
    isLoading,
    error,
  };
}

export default useGetUserVenues;
