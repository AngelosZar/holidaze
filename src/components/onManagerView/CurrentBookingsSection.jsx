import { useEffect, useState } from 'react';
import ManagersUpcomingBooking from '../../components/onManagerView/ManagersUpcomingBooking';
import useProfileStore from '../../stores/profileStore';
import returnUser from '../utilities/returnUser';
import { UpComingBookingCard } from '../onProfile/UpComingBookingCard';
import venuesStore from '../../stores/venuesStore';
import ManagersVenue from './ManagersVenue';
import returnUserStatus from '../utilities/returnUserStatus';
function CurrentBookingsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getProfileBookings, getProfileVenues } = useProfileStore();
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
        // must make an api call to get the venues img map the array of objects
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
    // delete
  }, [getProfileBookings, numberOfVenues, getProfileVenues]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {error === 'No venues' && (
        <div className="grid grid-cols-1 mt-14 gap-4 ">
          <p className="text-center text-gray-500">
            You have no venues to show
          </p>
        </div>
      )}

      {/* if array of object is empty return message that you have no venues */}
      {!isLoading && !error && (
        <section className="w-full mb-22 flex flex-col items-center">
          {venues.length > 0 && (
            <h5 className="text-center text-primary60  mb-4">
              You have {venues.length} upcoming stays.
            </h5>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto w-full">
            {returnUserStatus() &&
              venues.map(venue => (
                <ManagersUpcomingBooking
                  key={venue.id}
                  venue={venue}
                  loading={isLoading}
                  error={error}
                />
              ))}
            {!returnUserStatus() &&
              venues.map(venue => (
                <UpComingBookingCard
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
