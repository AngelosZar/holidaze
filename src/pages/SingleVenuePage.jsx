import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroGrid from '../components/onSingleVenue/HeroGrid';
import VenueInfoSection from '../components/onSingleVenue/VenueInfoSection';
import useGetVenueWithId from '../hooks/useGetVenueWithId';
import { useEffect, useState } from 'react';
import MapSection from '../components/onSingleVenue/MapSection';

function SingleVenuePage() {
  const [venueGallery, setVenueGallery] = useState([]);
  const { id } = useParams();
  const { venue, isLoading, error } = useGetVenueWithId(id);

  useEffect(() => {
    // if (venue?.media && venue.media.length > 0) {
    //   return;
    // }
    if (venue?.media && venue.media.length > 0) {
      const media = venue.media.map(img => ({
        url: img.url,
        alt: img.alt,
      }));
      setVenueGallery(media);
    }
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
