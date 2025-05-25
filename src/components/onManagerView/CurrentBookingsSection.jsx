import { useEffect, useState } from 'react';
import useProfileStore from '../../stores/profileStore';
import returnUser from '../utilities/returnUser';
import { UpComingBookingCard } from '../onProfile/UpComingBookingCard';
import returnUserStatus from '../utilities/returnUserStatus';
import useBookingStore from '../../stores/bookingsStore';

function CurrentBookingsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const { getBooking } = useBookingStore();
  const { getProfileBookings } = useProfileStore();
  //
  useEffect(() => {
    const fetchBookingsAndVenues = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const user = returnUser();
        const userName = user.name;

        const profileBookingsRes = await getProfileBookings(
          userName,
          true,
          true
        );

        if (!profileBookingsRes.data || profileBookingsRes.data.length === 0) {
          setError('No bookings found for this profile.');
          setUpcomingBookings([]);
          setIsLoading(false);
          return;
        }
        const uniqueBookingIds = [
          ...new Set(profileBookingsRes.data.map(booking => booking.id)),
        ];

        const detailedBookingsPromises = uniqueBookingIds.map(bookingId =>
          getBooking(bookingId, true, true)
        );

        const detailedBookingsData = await Promise.all(
          detailedBookingsPromises
        );

        const validBookings = detailedBookingsData.filter(booking => booking);
        console.log('detailedBookingsData', detailedBookingsData);
        setUpcomingBookings(validBookings);
      } catch (error) {
        setError('Failed to fetch bookings and venues');
        console.error('Error fetching bookings and venues:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookingsAndVenues();
    return () => {
      setIsLoading(false);
      setError(null);
    };
  }, [getProfileBookings, getBooking]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <h3>{error}</h3>}
      {error === 'No venues' && (
        <div className="grid grid-cols-1 mt-14 gap-4 ">
          <p className="text-center text-gray-500">
            You have no venues to show
          </p>
        </div>
      )}
      {!isLoading && !error && (
        <section className="w-full mb-22 flex flex-col items-center">
          {upcomingBookings.length > 0 && (
            <h5 className="text-center text-primary60  mb-4">
              You have {upcomingBookings.length} upcoming stays.
            </h5>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto w-full">
            {returnUserStatus() &&
              upcomingBookings.map(booking => (
                <UpComingBookingCard
                  key={booking?.data?.id}
                  booking={booking}
                  loading={isLoading}
                  error={error}
                />
              ))}

            {!returnUserStatus() &&
              upcomingBookings.map(booking => (
                <UpComingBookingCard
                  key={booking?.data?.id}
                  booking={booking}
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
