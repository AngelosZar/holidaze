import { useEffect, useState } from 'react';

function useGetFilteredVenues(functionName, sort = 'price') {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  //   const { getVenues, searchVenues } = useVenueStore();

  // functions for pagination +1 and -1
  // set limit ??
  useEffect(() => {
    async function fetchVenues() {
      setLoading(true);
      setError(null);

      try {
        const data = await functionName(sort, limit, page, true, true);
        const venues = data.data;
        console.log('venues', venues);
        const formattedData = venues
          .map(venue => ({
            key: venue.id,
            id: venue?.id,
            title: venue?.name,
            media: venue?.media[0]?.url,
            mediaAlt: venue?.media[0]?.alt,
            price: venue?.price,
            rating: venue?.rating,
            location: {
              address: venue.location?.address || '',
              city: venue.location?.city || '',
              continent: venue.location?.continent || '',
              country: venue.location?.country || '',
              lat: venue.location?.lat || 0,
              lng: venue.location?.lng || 0,
              zip: venue.location?.zip || '',
            },
            maxGuests: venue.maxGuests || 1,
          }))
          .filter(Boolean);
        setLoading(false);
        setError(null);
        setStays(formattedData);

        return data;
      } catch (error) {
        console.log('error', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchVenues();
  }, [functionName, page, limit, sort]);
  return { stays, loading, error, setPage, setLimit };
}

export default useGetFilteredVenues;
