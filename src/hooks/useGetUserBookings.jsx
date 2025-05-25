import { useState, useEffect } from 'react';
import useProfileStore from '../stores/profileStore';
import returnUser from '../components/utilities/returnUser';

const user = returnUser();
function useGetUserBookings(initialUser = 'angZar') {
  const { getProfileBookings, isLoading, error } = useProfileStore(
    state => state
  );
  const [user, setUserForBookings] = useState(initialUser);
  const [listOfBookings, setListOfBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const data = await getProfileBookings(initialUser);

        return data;
      } catch (error) {
        console.log('error', error);
      }
    }

    fetchBookings();
  }, [getProfileBookings, initialUser, user]);

  return {
    getProfileBookings,
    isLoading,
    error,
    listOfBookings,
    setListOfBookings,
    user,
    setUserForBookings,
  };
}

export default useGetUserBookings;
