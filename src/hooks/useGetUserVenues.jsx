import { useEffect, useState } from 'react';
import useProfileStore from '../stores/profileStore';

function useGetUserVenues(initialUser = 'angZar') {
  const { getProfileVenues, isLoading, error } = useProfileStore(
    state => state
  );
  const [user, setUserForVenues] = useState(initialUser);
  const [listOfVenues, setListOfVenues] = useState([]);
  //   set more states when needed // pagibnation, loading, error

  useEffect(() => {
    async function fetchVenues() {
      try {
        const data = await getProfileVenues(user);
        console.log('data', data);
        return data;
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchVenues();
  }, [getProfileVenues, user]);

  return {
    getProfileVenues,
    user,
    setUserForVenues,
    listOfVenues,
    setListOfVenues,
    isLoading,
    error,
  };
}

export default useGetUserVenues;
