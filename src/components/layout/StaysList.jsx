import SingleCard from '../SingleCard';

function StaysList({ stays, loading, error }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {stays &&
        stays.map(venue => {
          return (
            <SingleCard
              key={venue.id}
              id={venue.id}
              title={venue.title}
              image={venue.media?.[0]?.url || venue.media}
              // image={venue.media[0].url}
              imageAlt={venue.mediaAlt}
              price={venue.price}
              rating={venue.rating}
              location={venue.location}
            />
          );
        })}
    </div>
  );
}
export default StaysList;
