import SingleCard from '../SingleCard';
function RecommendedStays() {
  return (
    <section>
      <h2>Best stays -recommended for you </h2>
      {/* grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </section>
  );
}

export default RecommendedStays;
