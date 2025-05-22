import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroGrid from '../components/onSingleVenue/HeroGrid';
import VenueInfoSection from '../components/onSingleVenue/VenueInfoSection';

import useGetVenueWithId from '../hooks/useGetVenueWithId';
import { useEffect, useState } from 'react';
import MapSection from '../components/onSingleVenue/MapSection';
import { set } from 'date-fns';
// import useBookingStore from '../stores/bookingsStore';
function SingleVenuePage() {
  const [venueGallery, setVenueGallery] = useState([]);

  // const { setSingleVenue, singleVenue, getVenue } = useVenueStore();
  // const navigate = useNavigate();
  const { id } = useParams();
  const { venue, isLoading, error } = useGetVenueWithId(id);
  // const venueBookings = venue?.bookings || [];
  // console.log(venueBookings);

  useEffect(() => {
    if (venue?.media && venue.media.length > 0) {
      const media = venue.media.map(img => ({
        url: img.url,
        alt: img.alt,
      }));
      setVenueGallery(media);
    }
  }, [venue]);

  // useEffect(() => {
  //   if (venue?.bookings && venue.bookings.length > 0) {
  //     const bookings = venue.bookings.map(booking => ({
  //       dateFrom: booking.dateFrom,
  //       dateTo: booking.dateTo,
  //     }));
  //     setVenueBookings(bookings);
  //   }
  //   console.log('venueBookings', venueBookings);
  //   // dateFrom
  //   // :
  //   // "2025-05-19T22:00:00.000Z"
  //   // dateTo
  //   // :
  //   // "2025-05-22T21:59:59.999Z"
  // }, [venue, venueBookings]);
  // useEffect(() => {
  //   if (venue?.bookings && venue.bookings.length > 0) {
  //     const bookings = venue.bookings;
  //     setVenueBookings(bookings);
  //   }
  // }, [setVenueBookings, venue.bookings]);
  return (
    <Layout>
      <HeroGrid
        venue={venue}
        isLoading={isLoading}
        error={error}
        venueGallery={venueGallery}
      />
      <VenueInfoSection venue={venue} isLoading={isLoading} error={error} />
      <MapSection venue={venue} />
    </Layout>
  );
}

export default SingleVenuePage;
