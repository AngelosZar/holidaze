import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroGrid from '../components/onSingleVenue/HeroGrid';
import VenueInfoSection from '../components/onSingleVenue/VenueInfoSection';

import useGetVenueWithId from '../hooks/useGetVenueWithId';
import { useEffect, useState } from 'react';
import MapSection from '../components/onSingleVenue/MapSection';
// import useBookingStore from '../stores/bookingsStore';
function SingleVenuePage() {
  const [venueGallery, setVenueGallery] = useState([]);
  // const { setSingleVenue, singleVenue, getVenue } = useVenueStore();
  // const navigate = useNavigate();
  const { id } = useParams();
  const { venue, isLoading, error } = useGetVenueWithId(id);

  useEffect(() => {
    if (venue?.media && venue.media.length > 0) {
      const media = venue.media.map(img => ({
        url: img.url,
        alt: img.alt,
      }));
      setVenueGallery(media);
      // console.log(media.length);
      // console.log('venue.media', venue.media);
    }

    // if (venue?.media && venue.media.length > 0)
    //   console.log('venue.media', venue.media.length);
    // console.log('venue', venue);
  }, [venue]);
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
