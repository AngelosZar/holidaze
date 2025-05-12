import { useEffect, useState } from 'react';
import ManagersUpcomingBooking from '../../components/onManagerView/ManagersUpcomingBooking';
import useProfileStore from '../../stores/profileStore';
import returnUser from '../utilities/returnUser';
import venuesStore from '../../stores/venuesStore';
function CurrentBookingsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getProfileBookings } = useProfileStore();
  const [venues, setVenues] = useState([]);
  const [numberOfVenues, setNumberOfVenues] = useState(0);

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
        const venues = await getProfileBookings(userName);
        console.log('venues:', venues.data);
        if (venues.data.length === 0) {
          setError('No venues');
        }
        // Error: {message: 'No profile with this name'}
        setVenues(venues.data);
        setNumberOfVenues(venues.data.length);
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
  }, [getProfileBookings, numberOfVenues]);

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
        <section className="w-full mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {venues.length > 0 && (
              <h5 className="text-center text-primary60  mb-4">
                You have {venues.length} venues.
              </h5>
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

export default CurrentBookingsSection;
