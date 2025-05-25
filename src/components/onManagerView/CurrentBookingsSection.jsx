import { useEffect, useState } from 'react';
import useProfileStore from '../../stores/profileStore';
import returnUser from '../utilities/returnUser';
import { UpComingBookingCard } from '../onProfile/UpComingBookingCard';
import useBookingStore from '../../stores/bookingsStore';
import { useNavigate } from 'react-router-dom';
import IsLoadingContainer from '../utilities/IsLoadingContainer';
function CurrentBookingsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const { getBooking } = useBookingStore();
  const { getProfileBookings } = useProfileStore();
  const navigate = useNavigate();

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

        if (
          !profileBookingsRes ||
          !profileBookingsRes.data ||
          profileBookingsRes.data.length === 0
        ) {
          setError('No bookings found for this profile.');
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
      <section className="w-full my-12 mx-8">
        {isLoading ? (
          <IsLoadingContainer />
        ) : error ? (
          error === 'No bookings found for this profile.' ||
          error === 'No valid booking details could be retrieved.' ? (
            <div className="flex justify-center items-center container mx-auto flex-col mt-12 gap-4">
              <h3 className="text-red-500">{error}</h3>
              <h5>Start by finding out your new destination </h5>
              <button
                className="btn-primary py-4"
                onClick={() => navigate('/')}
              >
                Start here
              </button>
            </div>
          ) : (
            <h3 className="text-red-500">{error}</h3>
          )
        ) : (
          <>
            {upcomingBookings.length > 0 && (
              <h5 className="text-center text-primary60 mb-4">
                You have {upcomingBookings.length} upcoming stays.
              </h5>
            )}
            {upcomingBookings.length === 0 && (
              <div className="flex justify-center items-center container mx-auto flex-col mt-12 gap-4">
                <h3 className="text-red-500">No upcoming bookings found.</h3>
                <h5>Start by finding out your new destination </h5>
                <button
                  className="btn-primary py-4"
                  onClick={() => navigate('/')}
                >
                  Start here
                </button>
              </div>
            )}

            {upcomingBookings.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto w-full">
                {upcomingBookings.map(booking => (
                  <UpComingBookingCard
                    key={booking?.data?.id}
                    booking={booking}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default CurrentBookingsSection;
