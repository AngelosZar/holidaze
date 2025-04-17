import SingleCard from '../SingleCard';
function QuickSearch() {
  return (
    <section className="container mx-auto px-4">
      <h4>Quick Search</h4>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <ul className="flex flex-col md:flex-row gap-8 bg-primary text-white py-4 px-2 rounded-lg">
          <li className="">Category 1</li>
          <li className="">Category 2</li>
          <li className="">Category 3</li>
          <li className="">Category 4</li>
        </ul>
      </div>
      <div className="mt-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      </div>
    </section>
  );
}

export default QuickSearch;
