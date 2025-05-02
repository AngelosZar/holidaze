import { useEffect, useState } from 'react';

import SingleCard from '../SingleCard';
import useVenueStore from '../../stores/venuesStore';
import useGetFilteredVenues from '../../hooks/useGetFilteredVenues';
import StaysList from '../layout/StaysList';
function RecommendedStays() {
  const { getVenues } = useVenueStore();
  const { stays, loading, error } = useGetFilteredVenues(getVenues, 'rating');

  return (
    <section className="container mx-auto px-4 py-8">
      <h4>Best stays -recommended for you </h4>
      <StaysList stays={stays} loading={loading} error={error} />
    </section>
  );
}

export default RecommendedStays;
