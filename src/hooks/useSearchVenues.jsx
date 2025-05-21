import { useEffect, useState } from 'react';
import useVenueStore from '../stores/venuesStore';

function useSearchVenues(searchTerm) {
  //   const [searchTerm, setSearchTerm] = useState('');
  const [stays, setStays] = useState([]);
  const { searchVenues } = useVenueStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [sort, setSort] = useState('desc');

  useEffect(() => {
    const fetchVenues = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await searchVenues(searchTerm, limit, page);

        console.log('search data', data);

        if (!data || !data.data) {
          throw new Error('No data returned from API');
        }

        const venues = data.data;
        // setStays([]);

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
        setStays(formattedData);
      } catch (error) {
        console.error('Error fetching venues:', error);
        setError('Failed to fetch venues. Please try again later.');
        setStays([]);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchVenues();
    } else {
      setStays([]);
      setLoading(false);
    }
  }, [searchTerm, searchVenues, limit, page, sort]);

  return { stays, loading, error, setPage, setLimit, setSort, searchVenues };
}

export default useSearchVenues;
