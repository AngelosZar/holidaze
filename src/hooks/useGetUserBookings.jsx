import { useState, useEffect } from 'react';
import useProfileStore from '../stores/profileStore';
import returnUser from '../components/utilities/returnUser';

const user = returnUser();
console.log('user', user);
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
        // console.log('listOfBookings', listOfBookings);
        return data;
      } catch (error) {
        console.log('error', error);
      }
    }
    // console.log('initialUser', initialUser);
    // console.log('listOfBookings', listOfBookings);
    fetchBookings();
  }, [getProfileBookings, initialUser, user]);
  //   if i add listOfBooking it creates an infinite loop

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
