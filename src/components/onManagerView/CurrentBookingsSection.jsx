import { useEffect, useState } from 'react';
import ManagersUpcomingBooking from '../../components/onManagerView/ManagersUpcomingBooking';
import useProfileStore from '../../stores/profileStore';
import returnUser from '../utilities/returnUser';

function CurrentBookingsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getProfileVenues, getProfileBookings } = useProfileStore();
  // const user = returnUser();
  // const name = user.name;
  // console.log('user', user);
  // const name = user.name;
  // console.log('name', name);
  // console.log();

  useEffect(() => {
    const user = returnUser();
    const userName = user.name;
    // console.log(typeof userName); // why is it returning as  an object
    // have to return it as string
    console.log('user', userName);
    console.log(typeof userName);
    // const fetchVenues = async (userName = 'angZar') => {
    const fetchVenues = async () => {
      setIsLoading(true);
      try {
        // const venues = await getProfileVenues('angzar49');
        const venues = await getProfileVenues(userName);
        console.log('venues:', venues.data);
        if (venues.data.length === 0) {
          setError('You have no venues to show');
        }
      } catch (err) {
        setError('Failed to fetch venues');
        console.error('Error fetching venues:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenues();
    // CurrentBookingsSection.jsx?t=1746899500547:37 Error fetching venues: Error: No profile with this name
    return () => {
      setIsLoading(false);
      setError(null);
    };
  }, [getProfileVenues]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {/* if array of object is empty return message that you have no venues */}
      {!isLoading && !error && (
        <section className="w-full mt-12 mb-12">
          <div className="grid grid-cols-1 mt-14 gap-4 ">
            <ManagersUpcomingBooking />
            <ManagersUpcomingBooking />
            <ManagersUpcomingBooking />
          </div>
        </section>
      )}
    </>
  );
}

export default CurrentBookingsSection;
