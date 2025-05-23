import { use, useEffect, useState } from 'react';
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
  const [venues, setVenues] = useState([]);
  const [numberOfVenues, setNumberOfVenues] = useState(0);
  const [individualVenuesIds, setIndividualVenuesIds] = useState([]);
  const { getProfileBookings, getProfileVenues } = useProfileStore();
  const { getVenue } = venuesStore();
  useEffect(() => {
    const user = returnUser();
    const userName = user.name;
    const fetchBookingsAndVenues = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await getProfileBookings(userName);
        if (res.data.length === 0) setError('No venues');
        setNumberOfVenues(res.data.length);
        console.log(numberOfVenues);
        const bookings = res.data;

        // create array of unique venue ids from bookings//
        const uniqueVenueIds = [
          ...new Set(bookings.map(booking => booking.id)),
        ];
        // console.log('qqqqqqqqqqqqq', res.data);
        // console.log('qqqqqqqqqqqqq', uniqueVenueIds);
        setIndividualVenuesIds(uniqueVenueIds);
      } catch (err) {
        setError('Failed to fetch venues');
        console.error('Error fetching venues:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookingsAndVenues();
    // CurrentBookingsSection.jsx?t=1746899500547:37 Error fetching venues: Error: No profile with this name
    return () => {
      setIsLoading(false);
      setError(null);
    };
    // delete
  }, [getProfileBookings, numberOfVenues, getProfileVenues]);

  useEffect(() => {
    if (individualVenuesIds.length === 0) return;
    // maybe set error as well here
    if (
      individualVenuesIds.length > 0 &&
      individualVenuesIds.length === numberOfVenues
    ) {
      const fetchAllVenues = async () => {
        try {
          setIsLoading(true);
          // setError(null);
          const venuesPromises = individualVenuesIds.map(async venueId => {
            try {
              const venueData = await getVenue(venueId);
              // console.log('Venue data for', venueId, ':', venueData);
              // console.log('venueData', venueData);
              return { id: venueId, data: venueData, success: true };
            } catch (error) {
              console.error(`Failed to fetch venue ${venueId}:`, error);
              return { id: venueId, error: error, success: false };
            }
          });
          const venueRes = await Promise.allSettled(venuesPromises);
          // console.log('venueRes', venueRes);
          //
          const venueMap = new Map();
          const errorMap = new Map();
          venueRes.forEach((result, index) => {
            if (result.status === 'fulfilled') {
              const { id, data, success, error } = result.value;
              if (success) {
                venueMap.set(id, data);
              } else {
                errorMap.set(id, error);
              }
            } else {
              const venueId = individualVenuesIds[index];
              errorMap.set(venueId, result.reason);
            }

            setVenues(Array.from(venueMap.values()));
            console.log('venueMap', venueMap);
          });
          // setVenues(venueRes);
        } catch (error) {
          console.log('error', error);
        } finally {
          setIsLoading(false);
          setError(null);
        }

        // console.log('individualVenuesIds', individualVenuesIds);
      };
      // fetchAllVenues();
    }
    // infinite loop
    // fetchAllVenues();
  }, [individualVenuesIds, getVenue, numberOfVenues]);
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
