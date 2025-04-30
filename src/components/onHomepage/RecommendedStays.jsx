import { useEffect, useState } from 'react';

import SingleCard from '../SingleCard';
import useVenueStore from '../../stores/venuesStore';

function RecommendedStays() {
  const [recommendedStays, setRecommendedStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const { getVenue, searchVenues } = useVenueStore();

  // functions for pagination +1 and -1
  // set limit ??
  useEffect(() => {
    async function fetchVenues() {
      setLoading(true);
      setError(null);
      try {
        // const data = await getVenue('7d74e8bc-ef55-4d26-803f-753c59e8b710');
        const { data } = await searchVenues('hotel', limit, page);
        const formattedData = data.map(venue => ({
          key: venue.id,
          id: venue.id,
          title: venue.name,
          media: venue.media[0].url,
          mediaAlt: venue.media[0].alt,
          price: venue.price,
          rating: venue.rating,
          location: {
            address: venue.location.address,
            city: venue.location.city,
            continent: venue.location.continent,
            country: venue.location.country,
            lat: venue.location.lat,
            lng: venue.location.lng,
            zip: venue.location.zip,
          },
          maxGuests: venue.maxGuests,
        }));
        setLoading(false);
        setError(null);
        setRecommendedStays(formattedData);
        console.log('recommendedStays', formattedData);

        return data;
      } catch (error) {
        console.log('error', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchVenues();
  }, [searchVenues, page, limit]);

  return (
    <section className="container mx-auto px-4 py-8">
      <h4>Best stays -recommended for you </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {recommendedStays &&
          recommendedStays.map(venue => {
            console.log('venue', venue.media);
            return (
              <SingleCard
                key={venue.id}
                id={venue.id}
                title={venue.title}
                image={venue.media}
                // image={venue.media[0].url}
                imageAlt={venue.mediaAlt}
                price={venue.price}
                rating={venue.rating}
                location={venue.location}
              />
            );
          })}
      </div>
    </section>
  );
}

export default RecommendedStays;
