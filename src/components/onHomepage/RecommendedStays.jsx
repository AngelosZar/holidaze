import SingleCard from '../SingleCard';
import useVenueStore from '../../stores/venuesStore';
import useGetFilteredVenues from '../../hooks/useGetFilteredVenues';
import StaysList from '../layout/StaysList';
function RecommendedStays() {
  const { getVenues } = useVenueStore();
  const { stays, loading, error } = useGetFilteredVenues(getVenues, 'rating');

  return (
    <section className="px-4 py-8 mb-12 bg-white ">
      <h4 className="py-4">Top rated Venues </h4>
      <StaysList stays={stays} loading={loading} error={error} />
    </section>
  );
}

export default RecommendedStays;
