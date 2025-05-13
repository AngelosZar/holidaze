import { useEffect, useState } from 'react';
import returnUser from '../utilities/returnUser';
import useProfileStore from '../../stores/profileStore';
import ManagersUpcomingBooking from './ManagersUpcomingBooking';
import venuesStore from '../../stores/venuesStore';
import ManagersVenue from './ManagersVenue';

function UsersVenueSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getProfileVenues } = useProfileStore();
  const [venues, setVenues] = useState([]);
  const { deleteVenue, setSingleVenue } = venuesStore();

  useEffect(() => {
    const user = returnUser();
    const userName = user.name;

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

  const handleEditVenue = id => {
    console.log('Edit venue');
    setSingleVenue(id);
    console.log('singleVenue', id);
    // reroute to edit page /component with react router
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
          <h4 className="text-center text-gray-500">
            You have no venues to show
          </h4>
        </div>
      )}
      {error && <p className="text-center text-primary60 mb-8">{error}</p>}

      {!isLoading && !error && (
        <section className="w-full mb-22 flex flex-col items-center">
          {venues.length > 0 && (
            <h6 className="text-center text-primary80 mb-8">
              You own {venues.length} venues.
            </h6>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto w-full">
            {venues.map(venue => (
              <ManagersVenue
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
