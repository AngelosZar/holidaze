import SingleCard from '../SingleCard';
function RecommendedStays() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h4>Best stays -recommended for you </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
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
