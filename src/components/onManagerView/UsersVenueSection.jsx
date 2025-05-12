import { useEffect, useState } from 'react';
import returnUser from '../utilities/returnUser';
import useProfileStore from '../../stores/profileStore';
import ManagersUpcomingBooking from './ManagersUpcomingBooking';

function UsersVenueSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getProfileVenues } = useProfileStore();
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    const user = returnUser();
    const userName = user.name;
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
          setError('No venues');
        }
        // Error: {message: 'No profile with this name'}
        setVenues(venues.data);
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
      {error === 'No venues' && (
        <div className="grid grid-cols-1 mt-14 gap-4 ">
          <p className="text-center text-gray-500">
            You have no venues to show
          </p>
        </div>
      )}
      {error && <p>{error}</p>}
      {/* if array of object is empty return message that you have no venues */}
      {!isLoading && !error && (
        <section className="w-full  mb-12">
          <div className="grid grid-cols-1  gap-4 ">
            {venues.length > 0 && (
              <p className="text-center text-primary60  mb-8 ">
                You have {venues.length} venues.
              </p>
            )}
            {venues.map(venue => (
              <ManagersUpcomingBooking
                key={venue.id}
                venue={venue}
                loading={isLoading}
                error={error}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default UsersVenueSection;
