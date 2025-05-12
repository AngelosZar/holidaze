import { useEffect, useState } from 'react';
import returnUser from '../utilities/returnUser';
import useProfileStore from '../../stores/profileStore';
import ManagersUpcomingBooking from './ManagersUpcomingBooking';
import venuesStore from '../../stores/venuesStore';

function UsersVenueSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getProfileVenues } = useProfileStore();
  const [venues, setVenues] = useState([]);
  const { deleteVenue } = venuesStore();
  useEffect(() => {
    const user = returnUser();
    const userName = user.name;
    console.log('user', userName);
    console.log(typeof userName);

    const fetchVenues = async () => {
      setIsLoading(true);
      try {
        const venues = await getProfileVenues(userName);
        console.log('venues:', venues.data);
        if (venues.data.length === 0) {
          setError('No venues');
        }

        setVenues(venues.data);
      } catch (err) {
        setError('Failed to fetch venues');
        console.error('Error fetching venues:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenues();

    return () => {
      setIsLoading(false);
      setError(null);
    };
  }, [getProfileVenues]);

  const handleEditVenue = () => {
    console.log('Edit venue');
  };

  const handleRemoveVenue = async id => {
    console.log('Remove venue');
    await deleteVenue(id);

    const user = returnUser();
    const userName = user.name;
    const refreshVenues = async () => {
      try {
        const venues = await getProfileVenues(userName);
        setVenues(venues.data);
      } catch (err) {
        console.error('Error refreshing venues:', err);
        setError(err);
      }
    };
    refreshVenues();

    return () => {
      setIsLoading(false);
      setError(null);
    };
  };

  return (
    <>
      {isLoading && <p className="text-center">Loading...</p>}
      {error === 'No venues' && (
        <div className="grid grid-cols-1 mt-14 gap-4">
          <p className="text-center text-gray-500">
            You have no venues to show
          </p>
        </div>
      )}
      {error && <p className="text-center text-primary60 mb-8">{error}</p>}

      {!isLoading && !error && (
        <section className="w-full mb-12 flex flex-col items-center">
          {venues.length > 0 && (
            <h6 className="text-center text-primary80 mb-8">
              You own {venues.length} venues.
            </h6>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto w-full">
            {venues.map(venue => (
              <ManagersUpcomingBooking
                key={venue.id}
                venue={venue}
                loading={isLoading}
                error={error}
                handleRemoveVenue={handleRemoveVenue}
                handleEditVenue={handleEditVenue}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
export default UsersVenueSection;
