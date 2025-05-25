import useVenueStore from '../../stores/venuesStore';
import useGetFilteredVenues from '../../hooks/useGetFilteredVenues';
import StaysList from '../layout/StaysList';
import IsLoadingContainer from '../utilities/IsLoadingContainer';
function RecommendedStays() {
  const { getVenues } = useVenueStore();
  const { stays, loading, error } = useGetFilteredVenues(getVenues, 'rating');
  if (loading) {
    return <IsLoadingContainer />;
  }
  if (error) {
    return (
      <section className="px-4 py-8 mb-12 bg-white ">
        <h4 className="py-4">Top rated Venues </h4>
        <p className="text-red-500">Error: {error.message}</p>
      </section>
    );
  }
  if (!stays || stays.length === 0) {
    return (
      <section className="px-4 py-8 mb-12 bg-white ">
        <h4 className="py-4">Top rated Venues </h4>
        <p className="text-gray-500">No stays found for this filter.</p>
      </section>
    );
  }
  if (stays.length === 0) {
    return (
      <section className="px-4 py-8 mb-12 bg-white ">
        <h4 className="py-4">Top rated Venues </h4>
        <p className="text-gray-500">No stays found for this filter.</p>
      </section>
    );
  }
  return (
    <section className="px-4 py-8 mb-12 bg-white ">
      <h4 className="py-4">Top rated Venues </h4>
      <StaysList stays={stays} loading={loading} error={error} />
    </section>
  );
}
export default RecommendedStays;
