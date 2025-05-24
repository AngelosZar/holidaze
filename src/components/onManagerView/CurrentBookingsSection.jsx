import { useEffect, useState } from 'react';
import ManagersUpcomingBooking from '../../components/onManagerView/ManagersUpcomingBooking';
import useProfileStore from '../../stores/profileStore';
import returnUser from '../utilities/returnUser';
import { UpComingBookingCard } from '../onProfile/UpComingBookingCard';
import ManagersVenue from './ManagersVenue';
import returnUserStatus from '../utilities/returnUserStatus';
import useBookingStore from '../../stores/bookingsStore';

function CurrentBookingsSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const { getBooking } = useBookingStore();
  const { getProfileBookings, getProfileVenues } = useProfileStore();
  //
  useEffect(() => {
    const fetchBookingsAndVenues = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const user = returnUser();
        const userName = user.name;

        const profileBookingsRes = await getProfileBookings(userName);

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
        console.log('detailedBookingsData', detailedBookingsData);
        const validBookings = detailedBookingsData.filter(booking => booking);
        console.log('validBookings', validBookings);
        setUpcomingBookings(validBookings);
        console.log('validBookings', validBookings);
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
  // let test = '';
  // const { getVenue } = venuesStore();

  // useEffect(() => {
  //   const user = returnUser();
  //   const userName = user.name;
  //   const fetchBookingsAndVenues = async () => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const res = await getProfileBookings(userName);
  //       if (res.data.length === 0) setError('No venues');
  //       setNumberOfVenues(res.data.length);
  //       console.log(numberOfVenues);
  //       const bookings = res.data;
  //       console.log('bookings', bookings);
  //       // let tempBookings = bookings.map(booking => booking.id);
  //       // setBookingsIds(tempBookings);
  //       // const firstBooking = bookings[0].id;
  //       // console.log('firstBooking', firstBooking);
  //       // let test = firstBooking;
  //       const uniqueBookingsIds = [
  //         ...new Set(bookings.map(booking => booking.id)),
  //       ];
  //       setBookingsIds(uniqueBookingsIds);
  //       console.log(bookingsIds);
  //     } catch (err) {
  //       setError('Failed to fetch venues');
  //       console.error('Error fetching venues:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchBookingsAndVenues();
  //   // CurrentBookingsSection.jsx?t=1746899500547:37 Error fetching venues: Error: No profile with this name
  //   return () => {
  //     setIsLoading(false);
  //     setError(null);
  //   };
  //   // delete
  // }, [getProfileBookings, numberOfVenues, getProfileVenues]);

  // useEffect(() => {
  //   const fetchVenues = async () => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       console.log(test);
  //       bookingsIds.map(booking => {});
  //       console.log(bookingsIds[0]);
  //       const data = await getBooking(bookingsIds[0], true, true);
  //       // console.log('data from profile store', data);s
  //     } catch (err) {
  //       setError('Failed to fetch venues');
  //       console.error('Error fetching venues:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchVenues();
  //   return () => {
  //     setIsLoading(false);
  //     setError(null);
  //   };
  // }, [individualVenuesIds, getProfileVenues, test, getBooking]);

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
          {upcomingBookings.length > 0 && (
            <h5 className="text-center text-primary60  mb-4">
              You have {upcomingBookings.length} upcoming stays.
            </h5>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-auto w-full">
            {returnUserStatus() &&
              upcomingBookings.map(booking => (
                <ManagersUpcomingBooking
                  key={booking?.data?.id}
                  booking={booking?.venue}
                  loading={isLoading}
                  error={error}
                />
              ))}
            {!returnUserStatus() &&
              upcomingBookings.map(booking => (
                <UpComingBookingCard
                  key={booking?.data?.id}
                  booking={booking?.venue}
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

//  venue
// Object { status: "rejected", reason: Error }
// ​
// reason: Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.
// ​
// status: "rejected"

//
//  data from profile store
// Object { data: (3) […], meta: {…} }
// ​
// data: Array(3) [ {…}, {…}, {…} ]
// ​​
// 0: Object { id: "6ef66dcd-5b2c-4397-a6b8-69cb002abd7d", dateFrom: "2025-05-25T22:00:00.000Z", dateTo: "2025-05-27T22:00:00.000Z", … }
// ​​
// 1: Object { id: "0491bdb8-9160-41c6-8b4d-c11f715cd2eb", dateFrom: "2025-05-22T22:00:00.000Z", dateTo: "2025-05-29T22:00:00.000Z", … }
// ​​
// 2: Object { id: "4cd63d17-c572-4597-be3b-5d037c2c50f8", dateFrom: "2025-09-21T22:00:00.000Z", dateTo: "2025-09-25T22:00:00.000Z", … }
